import React from 'react';
import { shallow } from 'enzyme';

import InviteFormSkeleton from '../InviteFormSkeleton';

// No need for more than a simple snapshot test here as the component accepts no props
it('Shallow snapshot matches', () => {
    const wrapper = shallow(<InviteFormSkeleton />);

    expect(wrapper).toMatchSnapshot();
});
