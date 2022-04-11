import React from 'react';
import vehiclePlaceholderImage from './../../../assets/images/vehicle_placeholder.png';
import { vehicleApiUrl, starshipsApiUrl } from './../../../api/constants';
import { urlReplace } from '../../../utils/urlReplace';
import './styles.scss';

const List = ({ category, details, selectHandler }) => {

  const categoryUrl = category === 'vehicle' ? vehicleApiUrl : starshipsApiUrl;

  const itemSelectHandler = (vehicle) => {
    const id = urlReplace(vehicle.url, categoryUrl)[1];
    selectHandler(id);
  }

  const favouriteHandler = (itemUrl) => {
    const categoryIds = urlReplace(itemUrl, categoryUrl);
    let item = localStorage.getItem('vehicle');
    if (!item) {
      localStorage.setItem('vehicle', JSON.stringify([categoryIds[1]]));
    } else {
      item = item.split(',');
      if (item.indexOf(categoryIds[1]) === -1) {
        localStorage.setItem('vehicle', JSON.stringify([...JSON.parse(item), categoryIds[1]]));
      }
    }
  }

  const listElement = details.map((detail, i) => {
    return (
      <div key={i} className="col-sm-4 mb-4">
        <div className="card">
          <img src={vehiclePlaceholderImage} className="card-img-top" alt="vehicle_image" />
          <div className="card-body">
            <h5 className="card-title product-title" onClick={() => { itemSelectHandler(detail) }}>{detail.name}</h5>
            <p className="card-text">{detail.manufacturer}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{detail.model}</li>
            {detail.cost_in_credits !== 'unknown' ?
              <li className="list-group-item">£{detail.cost_in_credits}</li>
              : <li className="list-group-item">£0</li>}
            <li className="list-group-item">{detail.max_atmosphering_speed}</li>
          </ul>
          <div className="card-body">
            <button className="btn btn-success card-link" onClick={() => { favouriteHandler(detail.url) }}>
              Add to favourites
            </button>
          </div>
        </div>
      </div>
    )
  });

  return (
    <div className="row" data-testid="list-element">
      {listElement}
    </div>
  )
}

export default List;