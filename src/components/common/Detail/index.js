import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { vehicleApiUrl, starshipsApiUrl } from './../../../api/constants';

const Detail = () => {

  const { id, category } = useParams();
  const categoryUrl = category === 'vehicle' ? vehicleApiUrl: starshipsApiUrl;
  const url = `${categoryUrl}/${id}/`;

  const { list } = useSelector((state) => {
    if (category === 'vehicle') return state.vehicles;
    return state.starships;
  });
  const detail = list.filter((vehicle) => vehicle.url === url);

  return (
    <Fragment>
      <h5>{detail[0].name}</h5>
      <p>{detail[0].manufacturer}</p>
      <p>{detail[0].model}</p>
      <p>{detail[0].max_atmosphering_speed}</p>
    </Fragment>
  )
}

export default Detail;