import React from 'react';
import { shallow } from 'enzyme';

import AppFooter from '../AppFooter';

let realDate;

beforeEach(() => {
  // Fake the date to ensure the snapshots don't need updating every 1st of January
  const currentDate = new Date('2020-03-30T12:01:22.000Z');

  // Store the real Date to be able to restore it later
  realDate = Date;

  global.Date = class extends Date {
    constructor(date) {
      if (date) {
        return super(date);
      }

      return currentDate;
    }
  }
});

afterEach(() => {
  // Restore the gloabl Date back to the original
  global.Date = realDate;
})

// Snapshots
// No need for more than a simple snapshot test here as the component accepts no props
it('Shallow snapshot matches', () => {
  const wrapper = shallow(<AppFooter />);

  expect(wrapper).toMatchSnapshot();
});
