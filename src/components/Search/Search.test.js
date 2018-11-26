import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';

configure({adapter: new Adapter()});

describe('Search', () => {
  it('should render the filter input', () => {
    const wrapper = shallow(<Search filterList />);
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
