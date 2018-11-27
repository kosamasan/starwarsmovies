import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import MoviesList from '../components/MovieList/MovieList';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Sorting from '../components/Sorting/Sorting';
import Search from '../components/Search/Search';
import Spinner from '../components/Spinner/Spinner';

export class MoviesMain extends Component {
  state = {
    loading: true
  }

  componentDidMount () {
    let list = [];
    axios.get('https://star-wars-api.herokuapp.com/films')
    .then( response => {
      response.data.map((movies) => {
        return list.push(movies.fields)   
      })
      this.setState({loading:false});
      this.props.initialMovies(list);
      this.props.setMoviesFiltered(list);
    } )
    .catch( error => {
      console.log( error );
    } );
  }

  filterList =(event)=> {
    let updatedList = this.props.movies;
    updatedList = updatedList.filter(function(item){
      return item.title.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.props.setMoviesFiltered(updatedList);
  }

  sortBy = (param) => {
    let myData = [...this.props.moviesFiltered];
    if (param==='episode') {
      myData.sort(function(a, b) {
        return a.episode_id - b.episode_id;
      });
    } else if (param==='year') {
      myData.sort( (a,b) => a.release_date.localeCompare(b.release_date) )
    }
    this.props.setMoviesFiltered(myData);
  } 

  movieSelection = (title, summary, director) => {
    let selected = {
      'title' : title,
      'summary' : summary,
      'director' : director
    }
    this.props.selectMovie(selected);
  }

  render() {
    let output = <div>
      <div className="row">
        <Sorting sortBy={this.sortBy}/>
        <Search filterList={this.filterList} />
      </div>
      <div className="row">
        <div className="col-md-7">
          <MoviesList movies={this.props.moviesFiltered} movieSelection={this.movieSelection}/>
        </div>
        <div className="col-md-5">
          <MovieDetails details={this.props.details}/>
        </div>
      </div>
    </div>;
    if (this.state.loading) {
      output = <Spinner />
    }
    return (
      <div>{output}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    details: state.selectedMovie,
    movies: state.movies,
    moviesFiltered: state.moviesFiltered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectMovie: (val) => dispatch(actionCreators.selectMovie(val)),
    initialMovies: (val) => dispatch(actionCreators.initialMovies(val)),
    setMoviesFiltered: (val) => dispatch(actionCreators.moviesFiltered(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesMain);