import * as actionTypes from './actions';

const initialState = {
  movies: [],
  moviesFiltered: [],
  selectedMovie: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIAL_MOVIES:
      return {
      ...state,
      movies: action.val
    }
    case actionTypes.MOVIES_FILTERED:
      return {
      ...state,
      moviesFiltered: action.val
    }
    case actionTypes.SELECT_MOVIE:
      return {
      ...state,
      selectedMovie: action.val
    }
    default:
      return state;
  }
} 

export default reducer;