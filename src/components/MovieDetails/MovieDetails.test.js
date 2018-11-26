import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieDetails from './MovieDetails';

configure({adapter: new Adapter()});

describe('MovieDetails', () => {
  it('should render detailsEmpty class if no movie is selected', () => {
    const wrapper = shallow(<MovieDetails details={{}}/>);
    expect(wrapper.find('.detailsEmpty')).toHaveLength(1);
  });
});

describe('MovieDetails', () => {
  it('should render details class if a movie is selected', () => {
    const wrapper = shallow(<MovieDetails details={{title: 'title', summary: 'summary', director: 'director'}}/>);
    expect(wrapper.find('.details')).toHaveLength(1);
  });
});

describe('MovieDetails', () => {
  it('should render h3 tag if a movie is selected', () => {
    const wrapper = shallow(<MovieDetails details={{title: 'title', summary: 'summary', director: 'director'}}/>);
    expect(wrapper.find('h3')).toHaveLength(1);
  });
});

describe('MovieDetails', () => {
  it('should render h3 tag if a movie is selected', () => {
    const wrapper = shallow(<MovieDetails details={{title: 'title', summary: 'summary', director: 'director'}}/>);
    expect(wrapper.find('h3').length).toBe(1);
  });
});