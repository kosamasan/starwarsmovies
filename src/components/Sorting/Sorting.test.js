import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sorting from './Sorting';

configure({adapter: new Adapter()});

describe('Sorting', () => {
  it('should render the dropdown menu', () => {
    const wrapper = shallow(<Sorting sortBy />);
    expect(wrapper.find('.dropdown')).toHaveLength(1);
  });
});

describe('Sorting', () => {
  it('should have exactly 2 items in the dropdown', () => {
    const wrapper = shallow(<Sorting sortBy />);
    expect(wrapper.find('.dropdown-content p')).toHaveLength(2);
  });
});