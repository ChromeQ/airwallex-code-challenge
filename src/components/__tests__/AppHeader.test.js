import React from 'react';
import { shallow, mount } from 'enzyme';

import AppHeader from '../AppHeader';

// Snapshots
it('Shallow snapshot matches', () => {
  const wrapper = shallow(<AppHeader />);

  expect(wrapper).toMatchSnapshot();
});

// Assertions
it('Should render the company logo', () => {
  const wrapper = mount(<AppHeader />);
  const logo = wrapper.find('img');

  expect(logo.exists()).toBe(true);
  expect(logo.prop('src')).toMatch(/broccoli\.svg/);
});

it('Should have an H1 title with company name', () => {
  const wrapper = mount(<AppHeader />);
  const h1 = wrapper.find('h1');

  expect(h1.exists()).toBe(true);
  expect(h1.text()).toBe('Broccoli & Co.');
});
