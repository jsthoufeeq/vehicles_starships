import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterByPrice, filterByVehicleFavourites } from '../../actions/vehicles';
import { parsePrice } from './../../utils/parsePrice';
import './styles.scss';

const Type = ({ category }) => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => {
    if (category === 'vehicle') return state.vehicles;
    return state.starships;
  })
  const [range, setRange] = useState(0);

  const filterList = (e) => {
    dispatch(filterByPrice(e.target.value));
  }

  const filterByFavourites = () => {
    const favouriteList = localStorage.getItem(category);
    if(favouriteList && favouriteList.length > 0) {
      dispatch(filterByVehicleFavourites(JSON.parse(favouriteList)));
    }
  }

  useEffect(() => {
    setRange(Math.max(...parsePrice(list)));
  }, [list]);

  return (
    <section className="col-sm-3 col-xs-12 mt-3">
      <h6>Filter</h6>
      <section className="filter-section">
        <ul className="list-unstyled vehicle-types">
          <li>
            <span className="filter-type">Price filter </span><input type="range" min="0" max={range} onChange={filterList} />
          </li>
          <li>
            <span className="filter-type" onClick={filterByFavourites}>favourites</span>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Type;