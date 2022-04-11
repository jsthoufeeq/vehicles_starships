import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import Detail from './index';

describe('Detail', () => {

  let appStore;
  let middlewares;
  let mockStore;

  beforeEach(() => {
    const initialState = {
      vehicles: {
        list: [],
        pageNumber: 1,
        filteredList: [],
        error: {}
      }
    };

    middlewares = [thunk];
    mockStore = configureStore(middlewares);
    appStore = mockStore(initialState);
  });

  test('renders Detail component', () => {
    const spy = jest.spyOn(useSelector)
    spy.mockReturnValue({ list: [] })
    render(
      <Provider store={appStore}>
        <Detail category="vehicle" />
      </Provider>
    );
    // screen.debug();
    // TODO add expect...
  });
});