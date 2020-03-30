import React from 'react';
import { shallow, mount } from 'enzyme';

import InviteFormSuccess from '../InviteFormSuccess';

// Snapshots
it('Shallow snapshot matches', () => {
    const wrapper = shallow(<InviteFormSuccess />);

    expect(wrapper).toMatchSnapshot();
});

// Assertions
it('Should call the props function when the `Ok` button is clicked', () => {
    const spy = jest.fn();
    const wrapper = mount(<InviteFormSuccess onClickComplete={spy} />);
    const button = wrapper.find('span').filterWhere(node => node.text() === 'Ok'); // Get the button related to something the user can see on the UI

    expect(button.exists()).toBe(true);

    button.simulate('click');

    expect(spy).toHaveBeenCalledTimes(1);
});
