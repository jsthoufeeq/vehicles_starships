import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('App', () => {

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

  test('renders App component', () => {
    render(
      <Provider store={appStore}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    // screen.debug();
    const element = screen.getByTitle('fallbackLazy');
    expect(element).toHaveTextContent('fetching data...');
  });

  // test('renders App component with results', () => {
  //   const mockData = {
  //     vehicles: {
  //       list: [
  //         {
  //           name: 'Testa x',
  //           model: 'tesla',
  //           manufacturer: 'XYZ',
  //           cost_in_credits: '15000',
  //           max_atmosphering_speed: 50
  //         }
  //       ],
  //       pageNumber: 1,
  //       filteredList: [],
  //       error: {}
  //     }
  //   }
  //   appStore = mockStore(mockData);
  //   render(
  //     <Provider store={appStore}>
  //       <Router>
  //         <App />
  //       </Router>
  //     </Provider>
  //   );
  //   const element = screen.getByTestId('list-element');
  //   expect(element).toBeInTheDocument();
  // });
});