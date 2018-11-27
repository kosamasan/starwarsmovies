import React from 'react';
import { MoviesMain } from './MoviesMain';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviesList from '../components/MovieList/MovieList';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Sorting from '../components/Sorting/Sorting';
import Search from '../components/Search/Search';
import Spinner from '../components/Spinner/Spinner';

configure({adapter: new Adapter()});

describe('MoviesMain', () => {
  it('should render Spinner component if state.loading has its initial value', () => {
    const wrapper = shallow(<MoviesMain/>);
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
});

describe('MoviesMain', () => {
  it('should render MoviesList component when state.loading is set to false', () => {
    const wrapper = shallow(<MoviesMain/>);
    wrapper.setState({loading: false});
    expect(wrapper.find(MoviesList)).toHaveLength(1);
  });
});

describe('MoviesMain', () => {
  it('should render MovieDetails component when state.loading is set to false', () => {
    const wrapper = shallow(<MoviesMain/>);
    wrapper.setState({loading: false});
    expect(wrapper.find(MovieDetails)).toHaveLength(1);
  });
});

describe('MoviesMain', () => {
  it('should render Sorting component when state.loading is set to false', () => {
    const wrapper = shallow(<MoviesMain/>);
    wrapper.setState({loading: false});
    expect(wrapper.find(Sorting)).toHaveLength(1);
  });
});

describe('MoviesMain', () => {
  it('should render Search component when state.loading is set to false', () => {
    const wrapper = shallow(<MoviesMain/>);
    wrapper.setState({loading: false});
    expect(wrapper.find(Search)).toHaveLength(1);
  });
});