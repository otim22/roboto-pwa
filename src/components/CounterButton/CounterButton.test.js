import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render card component', () => {  
    const mockColor = 'red';
    expect(shallow(<CounterButton robots={mockColor} />)).toMatchSnapshot();
});

it('correctly increments the counter', () => {  
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton robots={mockColor} />);
    
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
});