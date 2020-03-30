import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

// Snapshots
it('Shallow snapshot matches', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});

// Assertions
it('Should have a header and footer', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.exists('AppHeader')).toBe(true);
  expect(wrapper.exists('AppFooter')).toBe(true);
});

it('Should render the Invite inside the app content', () => {
  const wrapper = shallow(<App />);
  const appContent = wrapper.find('.app-content');

  expect(appContent.exists()).toBe(true);
  expect(appContent.children().exists('AppInvite')).toBe(true);
});
