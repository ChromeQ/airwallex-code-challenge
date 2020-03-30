import React from 'react';
import { shallow, mount } from 'enzyme';

import Modal from '../Modal';

// Snapshots
it('Shallow snapshot matches when not open', () => {
  const wrapper = shallow(<Modal open={false} />);

  expect(wrapper).toMatchSnapshot();
});

it('Shallow snapshot matches with title', () => {
  const wrapper = shallow(<Modal open={false} title="foobar" />);

  expect(wrapper).toMatchSnapshot();
});

it('Shallow snapshot matches with content', () => {
  const wrapper = shallow(<Modal open={false}>Foo Bar</Modal>);

  expect(wrapper).toMatchSnapshot();
});

// Assertions
it('Should not render the modal when not open', () => {
  const wrapper = mount(<Modal open={false} />);

  expect(wrapper.html()).toBeFalsy();
});

it('Should render a title when passed', () => {
  const wrapper = mount(<Modal open={true} title="foobar" />);
  const title = wrapper.find('div#modal-dialog-title');

  expect(title.exists()).toBe(true);
  expect(title.text()).toMatch('foobar');
});

it('Should not render a title when not provided', () => {
  const wrapper = mount(<Modal open={true} />);
  const title = wrapper.find('#modal-dialog-title');

  expect(title.exists()).toBe(false);
});

it('Should render the children inside the modal', () => {
  const wrapper = mount(<Modal open={true}>foo bar baz</Modal>);

  expect(wrapper.text()).toMatch('foo bar baz');
});
