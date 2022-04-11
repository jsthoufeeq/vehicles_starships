import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterVehicleList, clearVehicleFilterList } from '../../actions/vehicles';
import { filterStarshipsList, clearStarshipsFilterList } from '../../actions/starships';

const SearchBar = ({ category }) => {
  
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  }

  const submitSearch = (e) => {
    e.preventDefault();
    if (searchValue !== '') {
      category === 'vehicle' ? dispatch(filterVehicleList(searchValue))
        : dispatch(filterStarshipsList(searchValue));
    } else {
      category === 'vehicle' ? dispatch(clearVehicleFilterList())
        : dispatch(clearStarshipsFilterList());
    }
  }

  return (
    <section className="search-container">
      <h3 className="pt-3">Search</h3>
      <form className="input-group pt-3" onSubmit={submitSearch}>
        <input className="form-control col-sm-9" value={searchValue} onChange={searchHandler} placeholder="Enter your vehicle name/model" type="text" />
        <button
          tabIndex="0"
          type="submit"
          className="btn btn-warning col-sm-3">
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchBar;