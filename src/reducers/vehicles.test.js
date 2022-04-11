import reducer from './vehicles';
import expect from 'expect';
import * as actionTypes from '../constants/actionTypes';

describe('vehicle reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      list: [],
      pageNumber: 1,
      filteredList: [],
      next: null,
      previous: null,
      count: 0,
      error: {}
    });
  });

  it('should handle FILTER_VEHICLE_LIST', () => {
    const mockStore = { list: [{ name: 'x-34' }] }
    const expectedStore = { list: [...mockStore.list], filteredList: mockStore.list }
    const filterAction = {
      type: actionTypes.FILTER_VEHICLE_LIST,
      payload: 'x-34',
    };
    expect(reducer(mockStore, filterAction)).toEqual(expectedStore);
  });

  it('should update VEHICLE_PAGE_NUMBER', () => {
    const pageNumber = 2;
    const mockStore = { pageNumber: 1 }
    const expectedStore = { pageNumber }
    const updateAction = {
      type: actionTypes.UPDATE_VEHICLE_PAGE_NUMBER,
      payload: pageNumber,
    };
    expect(reducer(mockStore, updateAction)).toEqual(expectedStore);
  });
});