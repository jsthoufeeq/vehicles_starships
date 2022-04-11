import {
  FETCH_ALL_VEHICLE,
  FILTER_VEHICLE_LIST,
  UPDATE_VEHICLE_PAGE_NUMBER,
  CLEAR_VEHICLE_FILTER_LIST,
  FILTER_BY_PRICE_VEHICLE,
  FILTER_BY_FAVOURITES_VEHICLE,
  ERROR_VEHICLE
} from '../constants/actionTypes';
import { vehicleApiUrl } from '../api/constants';
import { urlReplace } from '../utils/urlReplace';

const initialState = {
  list: [],
  pageNumber: 1,
  filteredList: [],
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
const vehicles = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_ALL_VEHICLE: {
      return {
        ...state,
        list: action.payload.results,
        next: action.payload.next,
        previous: action.payload.previous,
        count: action.payload.count,
        filteredList: []
      }
    }

    case FILTER_VEHICLE_LIST: {
      const searchResults = state.list.filter((result) => {
        return result.name.toLowerCase().includes(action.payload.toLowerCase())
          || result.model.toLowerCase().includes(action.payload.toLowerCase());
      });
      return { ...state, filteredList: searchResults }
    }

    case FILTER_BY_PRICE_VEHICLE: {
      const filterByPriceResults = state.list.filter((vehicle) => {
        return parseInt(vehicle.cost_in_credits) < action.payload
          || vehicle.cost_in_credits === 'unknown';
      });
      return { ...state, filteredList: filterByPriceResults }
    }

    case FILTER_BY_FAVOURITES_VEHICLE: {
      const filterByFavouritesResults = state.list.filter((vehicle) => {
        return action.payload.includes(urlReplace(vehicle.url, vehicleApiUrl)[1]);
      });
      return { ...state, filteredList: filterByFavouritesResults }
    }

    case UPDATE_VEHICLE_PAGE_NUMBER: {
      return { ...state, pageNumber: action.payload }
    }

    case CLEAR_VEHICLE_FILTER_LIST: {
      return { ...state, filteredList: state.list }
    }

    case ERROR_VEHICLE: {
      return { ...state, error: action.payload }
    }

    default:
      return state;
  }
};

export default vehicles;