import axios from 'axios';
import { vehicleApiUrl } from './../api/constants';
import {
  FETCH_ALL_VEHICLE,
  FILTER_VEHICLE_LIST,
  UPDATE_VEHICLE_PAGE_NUMBER,
  CLEAR_VEHICLE_FILTER_LIST,
  FILTER_BY_PRICE_VEHICLE,
  FILTER_BY_FAVOURITES_VEHICLE,
  ERROR_VEHICLE
} from '../constants/actionTypes';


/**
 * dispatches the available vehicles
 *
 * @param {string} pageNumber
 * @returns {void}
 */
export const getVehicleList = (pageNumber) => async (dispatch) => {
  try {
    const { data: vehicles } = await axios.get(`${vehicleApiUrl}/?page=${pageNumber}`);
    dispatch({ type: FETCH_ALL_VEHICLE, payload: vehicles });
  } catch (error) {
    dispatch({ type: ERROR_VEHICLE, payload: error });
  }
};

/**
 * dispatches the filtered vehicles.
 *
 * @param {string} searchValue
 * @returns {void}
 */
export const filterVehicleList = (searchValue) => (dispatch) => {
  dispatch({ type: FILTER_VEHICLE_LIST, payload: searchValue });
}

/**
 * dispatches the pageNumber.
 *
 * @param {string} pageNumber
 * @returns {void}
 */
export const updatePageNumber = (pageNumber) => (dispatch) => {
  dispatch({ type: UPDATE_VEHICLE_PAGE_NUMBER, payload: pageNumber });
}

/**
 * dispatches to clear filters.
 *
 * @param {void} 
 * @returns {void}
 */
export const clearVehicleFilterList = () => (dispatch) => {
  dispatch({ type: CLEAR_VEHICLE_FILTER_LIST });
}

/**
 * dispatches to filter by price.
 *
 * @param {string} price
 * @returns {void}
 */
export const filterByPrice = (cost) => (dispatch) => {
  dispatch({ type: FILTER_BY_PRICE_VEHICLE, payload: parseInt(cost) });
}

/**
 * dispatches to filter by favourites.
 *
 * @param {string} price
 * @returns {void}
 */
export const filterByVehicleFavourites = (list) => (dispatch) => {
  dispatch({ type: FILTER_BY_FAVOURITES_VEHICLE, payload: list });
}
