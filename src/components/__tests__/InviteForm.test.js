import React from 'react';
import { shallow, mount } from 'enzyme';

import useEndpoint from '../../hooks/useEndpoint';
import InviteForm from '../InviteForm';

jest.mock('../../hooks/useEndpoint');

const noop = () => { };

const defaultEndpointState = {
  status: null,
  errorMessage: null,
  isPending: false,
  request: () => { }
};

beforeEach(() => {
  useEndpoint.mockClear();
});

// Snapshots
describe('Snapshot tests', () => {
  beforeEach(() => {
    useEndpoint.mockImplementation(() => ({ ...defaultEndpointState }));
  });

  it('Shallow snapshot matches blank form', () => {
    const wrapper = shallow(<InviteForm onSubmit={noop} onComplete={noop} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Shallow snapshot matches Spinner when form is pending', () => {
    // Set the pending state on the endpoint mock
    useEndpoint.mockImplementationOnce(() => ({
      ...defaultEndpointState,
      isPending: true
    }));
    const wrapper = shallow(<InviteForm onSubmit={noop} onComplete={noop} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Shallow snapshot matches successful form submit', () => {
    // Set the success status on the endpoint mock
    useEndpoint.mockImplementationOnce(() => ({
      ...defaultEndpointState,
      status: 200,
    }));
    const wrapper = shallow(<InviteForm onSubmit={noop} onComplete={noop} />);

    expect(wrapper).toMatchSnapshot();
  });
});

// Assertions
it('Should render the form with expected inputs', () => {
  const wrapper = mount(<InviteForm onSubmit={noop} onComplete={noop} />);
  const form = wrapper.find('form');

  // Get references to the form elements
  const nameInput = form.find('input[name="name"]');
  const emailInput = form.find('input[name="email"]');
  const confirmEmailInput = form.find('input[name="confirmEmail"]');
  const button = form.find('button[type="submit"]');

  // Check the elements exist and the correct number of them
  expect(form.exists()).toBe(true);
  expect(form.find('input').length).toBe(3);
  expect(form.find('button').length).toBe(1);

  expect(nameInput.exists()).toBe(true);
  expect(emailInput.exists()).toBe(true);
  expect(confirmEmailInput.exists()).toBe(true);
  expect(button.exists()).toBe(true);

  expect(nameInput.props().autoFocus).toBe(true);
});

// Integrations with custom hooks
describe('integration tests', () => {
  beforeEach(() => {
    useEndpoint.mockImplementation(() => ({ ...defaultEndpointState }));
  });

  it('Should show validation errors when submitting invalid empty form', () => {
    const wrapper = mount(<InviteForm onSubmit={noop} onComplete={noop} />);
    const form = wrapper.find('form');

    let fields = wrapper.find('form input');
    let invalids = fields.filter('[aria-invalid=true]');

    expect(fields.length).toBe(3);
    expect(invalids.length).toBe(0);

    // Submit the form and update the wrapper
    form.simulate('submit');
    wrapper.update();

    // fields must be found again from the wrapper as that is the root which updated
    fields = wrapper.find('form input');
    invalids = fields.filter('[aria-invalid=true]');

    // Ensure the fields are still on screen and they are all invalid
    expect(fields.length).toBe(3);
    expect(invalids.length).toBe(3);
  });

  it('Should not mark input as invalid when blurring away from input', () => {
    const wrapper = mount(<InviteForm onSubmit={noop} onComplete={noop} />);

    let field = wrapper.find('form input[name="name"]');
    let invalid = field.filter('[aria-invalid=true]');

    // Check the field exists and is focussed and not marked invalid
    expect(field.length).toBe(1);
    expect(invalid.length).toBe(0);
    expect(field.getDOMNode() === document.activeElement).toEqual(true);

    // Blur away from input without typing anythinig
    field.simulate('blur');
    wrapper.update();

    field = wrapper.find('form input[name="name"]');
    invalid = field.filter('[aria-invalid=true]');

    // The field should still not be marked as invalid
    expect(field.length).toBe(1);
    expect(invalid.length).toBe(0);
  });

  it('Should mark input as valid when meeting validation rules', () => {
    const wrapper = mount(<InviteForm onSubmit={noop} onComplete={noop} />);

    let field = wrapper.find('form input[name="name"]');
    let invalid = field.filter('[aria-invalid=true]');

    // Check the field exists and is blank value
    expect(field.length).toBe(1);
    expect(field.props().value).toBe('');
    expect(invalid.length).toBe(0);

    // Update the name field to contain a value which will pass validation
    field.simulate('change', { target: { value: 'abc', name: 'name' } });
    wrapper.update();

    field = wrapper.find('form input[name="name"]');
    invalid = field.filter('[aria-invalid=true]');
    const validIcon = field.parents().first().find('svg.isValid');

    // Ensure the value is updated and the input is marked with a valid icon
    expect(field.length).toBe(1);
    expect(field.props().value).toBe('abc');
    expect(invalid.length).toBe(0);
    expect(validIcon.length).toBe(1);
  });

  it('Should mark input as invalid with live validation', () => {
    const wrapper = mount(<InviteForm onSubmit={noop} onComplete={noop} />);

    let field = wrapper.find('form input[name="name"]');
    let invalid = field.filter('[aria-invalid=true]');

    // Check the field exists and is blank value
    expect(field.length).toBe(1);
    expect(field.props().value).toBe('');
    expect(invalid.length).toBe(0);

    // Update the name field to contain a value which will pass validation
    field.simulate('change', { target: { value: 'abc', name: 'name' } });
    wrapper.update();

    field = wrapper.find('form input[name="name"]');
    invalid = field.filter('[aria-invalid=true]');
    let validIcon = field.parents().first().find('svg.isValid');
    let invalidIcon = field.parents().first().find('svg.isInvalid');

    // Ensure the value is updated and the input is marked with a valid icon
    expect(field.length).toBe(1);
    expect(field.props().value).toBe('abc');
    expect(invalid.length).toBe(0);
    expect(validIcon.length).toBe(1);
    expect(invalidIcon.length).toBe(0);

    // Again update the name to an invalid value (remove one character)
    field.simulate('change', { target: { value: 'ab', name: 'name' } });
    wrapper.update();

    field = wrapper.find('form input[name="name"]');
    invalid = field.filter('[aria-invalid=true]');
    validIcon = field.parents().first().find('svg.isValid');
    invalidIcon = field.parents().first().find('svg.isInvalid');

    // Ensure the value is updated and the input is marked with a valid icon
    expect(field.length).toBe(1);
    expect(field.props().value).toBe('ab');
    expect(invalid.length).toBe(1);
    expect(validIcon.length).toBe(0);
    expect(invalidIcon.length).toBe(1);
  });

  it('Should submit the valid form and call the submit handler callback', (done) => {
    // Pass the async done as the submit callback on successful form submit
    const wrapper = mount(<InviteForm onSubmit={done} onComplete={noop} />);
    const form = wrapper.find('form');

    // Get references to the form elements
    const nameInput = form.find('input[name="name"]');
    const emailInput = form.find('input[name="email"]');
    const confirmEmailInput = form.find('input[name="confirmEmail"]');

    // Update the inputs to valid values and submit the form
    nameInput.simulate('change', { target: { value: 'abc', name: 'name' } });
    emailInput.simulate('change', { target: { value: 'foo@bar.com', name: 'email' } });
    confirmEmailInput.simulate('change', { target: { value: 'foo@bar.com', name: 'confirmEmail' } });

    // Set the success status on the endpoint mock before submitting the form
    useEndpoint.mockImplementationOnce(() => ({
      ...defaultEndpointState,
      status: 200
    }));

    form.simulate('submit');
  })
});