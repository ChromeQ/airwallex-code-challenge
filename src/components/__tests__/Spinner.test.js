import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../Spinner';

// No need for more than a simple snapshot test here as the component accepts no props
it('Shallow snapshot matches', () => {
  const wrapper = shallow(<Spinner />);

  expect(wrapper).toMatchSnapshot();
});
