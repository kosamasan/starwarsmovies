import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieList from './MovieList';

configure({adapter: new Adapter()});

describe('MovieList', () => {
  it('should render movie class if a movies is passed to MovieList', () => {
    const wrapper = shallow(<MovieList movies={[{episode_id:"1",
      title:"Return of the Jedi",
      release_date:"1980-05-17"}]}  movieSelection/>);
    expect(wrapper.find('.movie')).toHaveLength(1);
  });
});

describe('MovieList', () => {
  it('should render 2 list items if 2 movies are passed to MovieList', () => {
    const wrapper = shallow(<MovieList movies={[{episode_id:"1",
      title:"Return of the Jedi",
      release_date:"1980-05-17"},{episode_id:"2",
      title:"Return of the Jedi",
      release_date:"1980-05-18"}]}  movieSelection/>);
    expect(wrapper.find('li')).toHaveLength(2);
  });
});

describe('MovieList', () => {
  it('should render 6 divs if 2 movies are passed to MovieList', () => {
    const wrapper = shallow(<MovieList movies={[{episode_id:"1",
      title:"Return of the Jedi",
      release_date:"1980-05-17"},{episode_id:"2",
      title:"Return of the Jedi",
      release_date:"1980-05-18"}]}  movieSelection/>);
    expect(wrapper.find('li div')).toHaveLength(6);
  });
});