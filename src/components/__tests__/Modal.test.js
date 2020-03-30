import React from 'react';
import { shallow, mount } from 'enzyme';

import Modal from '../Modal';

const noop = () => { };

// Snapshots
it('Shallow snapshot matches when not open', () => {
  const wrapper = shallow(<Modal open={false} onClose={noop} />);

  expect(wrapper).toMatchSnapshot();
});

it('Shallow snapshot matches with title', () => {
  const wrapper = shallow(<Modal open={false} onClose={noop} title="foobar" />);

  expect(wrapper).toMatchSnapshot();
});

it('Shallow snapshot matches with content', () => {
  const wrapper = shallow(<Modal open={false} onClose={noop}>Foo Bar</Modal>);

  expect(wrapper).toMatchSnapshot();
});

// Assertions
it('Should not render the modal when not open', () => {
  const wrapper = mount(<Modal open={false} onClose={noop} />);

  expect(wrapper.html()).toBeFalsy();
});

it('Should render a title when passed', () => {
  const wrapper = mount(<Modal open={true} onClose={noop} title="foobar" />);
  const title = wrapper.find('div#modal-dialog-title');

  expect(title.exists()).toBe(true);
  expect(title.text()).toMatch('foobar');
});

it('Should not render a title when not provided', () => {
  const wrapper = mount(<Modal open={true} onClose={noop} />);
  const title = wrapper.find('#modal-dialog-title');

  expect(title.exists()).toBe(false);
});

it('Should render the children inside the modal', () => {
  const wrapper = mount(<Modal open={true} onClose={noop}>foo bar baz</Modal>);

  expect(wrapper.text()).toMatch('foo bar baz');
});
