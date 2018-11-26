export const INITIAL_MOVIES = 'INITIAL_MOVIES';
export const MOVIES_FILTERED = 'MOVIES_FILTERED';
export const SELECT_MOVIE = 'SELECT_MOVIE';

export const initialMovies = (value) => {
  return {
      type: INITIAL_MOVIES,
      val: value
  };
};

export const moviesFiltered = (value) => {
  return {
      type: MOVIES_FILTERED,
      val: value
  };
};

export const selectMovie = (value) => {
  return {
      type: SELECT_MOVIE,
      val: value
  };
};
