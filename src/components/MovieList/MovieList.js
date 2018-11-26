import React from 'react';
import './MovieList.css';

const MoviesList = (props) => {
  let movies = props.movies;
  
  return (
    <div className='moviesList'>
      <ul>
          {movies.map((list, i) =>
          <li key={i} className='row movie' onClick={()=>{props.movieSelection(list.title, list.opening_crawl, list.director)}}>
              <div className='col-xs-3 col-sm-2 episode'>EPISODE {list.episode_id}</div>
              <div className='col-xs-5 col-sm-6 title'>{list.title}</div>
              <div className='col-xs-4 date'>{list.release_date}</div>
          </li>
          )}
      </ul>
    </div>
  )
}

export default MoviesList;
