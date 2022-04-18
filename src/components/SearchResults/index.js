import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Pagination from './../common/Pagination';
import List from './../common/List';
import { getVehicleList } from '../../actions/vehicles';
import { getStarshipsList } from '../../actions/starships';

const SearchResults = ({ category }) => {

  const { list, filteredList, pageNumber, error } = useSelector((state) => {
    if (category === 'vehicle') return state.vehicles;
    return state.starships;
  });
  const [dispatch, navigate] = [useDispatch(), useNavigate()];

  useEffect(() => {
    const fetchData = () => {
      category === 'vehicle' ? dispatch(getVehicleList(pageNumber))
        : dispatch(getStarshipsList(pageNumber));
    }
    fetchData();
  }, [category, dispatch, pageNumber]);

  const onSelectHandler = (id) => {
    navigate(`detail/${category}/${id}`);
  }

  // throw 'err' -- to check Exception component
  const listData = filteredList.length ? filteredList : list;

  return (
    <div className="test col-sm-9 col-xs-12 mt-3">
      <h6>Search Results</h6>
      {error && error.message ?
        <div className="alert alert-warning" role="alert">
          There has been an {error.message}
        </div>
        :
        list && list.length ?
          <Fragment>
            <List category="vehicle" details={listData} selectHandler={onSelectHandler} />
            <Pagination category="vehicle" />
          </Fragment>
          : <p data-testid="no-results-element">no results found</p>
      }

    </div>
  )
}

export default SearchResults; // wrappedComponent would be perfect for this use case -- HOC