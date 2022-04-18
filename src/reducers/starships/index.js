import {
  FETCH_ALL_STARSHIPS,
  FILTER_STARSHIPS_LIST,
  CLEAR_STARSHIPS_FILTER_LIST,
  FILTER_BY_PRICE_STARSHIPS,
  ERROR_STARSHIPS
} from './../../constants/actionTypes';

const initialState = {
  starshipsList: [],
  pageNumber: 1,
  filteredStarshipsList: [],
  next: null,
  previous: null,
  count: 0,
  error: {}
}

/**
 * pure function - handles the state
 * 
 * @param {object} state 
 * @param {object} action 
 */
const starships = (state = initialState, action) => {
  switch (action.type) {

  case FETCH_ALL_STARSHIPS: {
    return {
      ...state,
      starshipsList: action.payload.results,
      next: action.payload.next,
      previous: action.payload.previous,
      count: action.payload.count
    }
  }

  case FILTER_STARSHIPS_LIST: {
    const searchResults = state.starshipsList.filter((result) => {
      return result.name.toLowerCase().includes(action.payload.toLowerCase())
          || result.model.toLowerCase().includes(action.payload.toLowerCase());
    });
    return { ...state, filteredStarshipsList: searchResults }
  }

  case FILTER_BY_PRICE_STARSHIPS: {
    const filterByPriceResults = state.starshipsList.filter((starships) => {
      return parseInt(starships.cost_in_credits) < action.payload;
    });
    return { ...state, filteredStarshipsList: filterByPriceResults }
  }
  case CLEAR_STARSHIPS_FILTER_LIST: {
    return { ...state, filteredStarshipsList: state.starshipsList }
  }

  case ERROR_STARSHIPS: {
    return { ...state, error: action.payload }
  }

  default:
    return state;
  }
};

export default starships;