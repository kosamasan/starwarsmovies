import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logo from './Logo';

configure({adapter: new Adapter()});

describe('Logo', () => {
  it('should render the logo class', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find('.logo')).toHaveLength(1);
  });
});