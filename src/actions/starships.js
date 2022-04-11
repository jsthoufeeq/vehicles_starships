import axios from 'axios';
import { starshipsApiUrl } from './../api/constants';
import {
  FETCH_ALL_STARSHIPS,
  FILTER_STARSHIPS_LIST,
  CLEAR_STARSHIPS_FILTER_LIST,
  FILTER_BY_PRICE_STARSHIPS,
  ERROR_STARSHIPS
} from '../constants/actionTypes';

/**
 * dispatches the available starships
 *
 * @param {string} pageNumber
 * @returns {void}
 */
export const getStarshipsList = (pageNumber) => async (dispatch) => {
  try {
    const { data: starships } = await axios.get(`${starshipsApiUrl}/?page=${pageNumber}`);
    dispatch({ type: FETCH_ALL_STARSHIPS, payload: starships });
  } catch (error) {
    dispatch({ type: ERROR_STARSHIPS, payload: error });
  }
};

/**
 * dispatches the filtered starships.
 *
 * @param {string} searchValue
 * @returns {void}
 */
export const filterStarshipsList = (searchValue) => (dispatch) => {
  dispatch({ type: FILTER_STARSHIPS_LIST, payload: searchValue });
}

/**
 * dispatches to clear filters.
 *
 * @param {void} 
 * @returns {void}
 */
export const clearStarshipsFilterList = () => (dispatch) => {
  dispatch({ type: CLEAR_STARSHIPS_FILTER_LIST });
}

/**
 * dispatches to filter by price.
 *
 * @param {string} price
 * @returns {void}
 */
export const filterByPrice = (price) => (dispatch) => {
  dispatch({ type: FILTER_BY_PRICE_STARSHIPS, payload: parseInt(price) });
}
