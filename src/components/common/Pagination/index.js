import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePageNumber } from './../../../actions/vehicles';
import './styles.scss';

const Pagination = ({ category }) => {
  const { next, previous, count } = useSelector((state) => {
    if (category === 'vehicle') return state.vehicles;
    return state.starships;
  });
  const dispatch = useDispatch();

  const limit = parseInt(count / 10) + 1;
  const paginationCount = [...Array(limit)];

  const paginationHandler = (number) => {
    if (!number) return false;
    let pageNumber = number;
    if (typeof pageNumber === 'string') {
      pageNumber = number.split('=')[1];
    }
    dispatch(updatePageNumber(pageNumber));
  }

  const paginationElement = paginationCount.map((count, i) => {
    return (
      <li className="page-item" key={i}>
        <a className="page-link" onClick={() => { paginationHandler(i + 1) }}>{i + 1}</a>
      </li>
    )
  });

  return (
    <nav aria-label="vehicle-pagination">
      <ul className="pagination pb-5 d-flex justify-content-center">
        <li className={`page-item ${previous === null ? 'disabled' : ''}`}>
          <a className="page-link" onClick={() => { paginationHandler(previous) }}>Previous</a>
        </li>
        {paginationElement}
        <li className={`page-item ${next === null ? 'disabled' : ''}`}>
          <a className="page-link" onClick={() => { paginationHandler(next) }}>Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;
