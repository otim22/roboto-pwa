import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render card component', () => {  
    const mockRobots = [
        {
            id: 1,
            name: 'John Deere',
            username: 'Johnny',
            email: 'johnny@gmail.com'
        }
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})