import React from 'react';
import './BeerItem.css';

const BeerItem = (props) => {

  const {name, first_brewed, image_url, abv, ibu, ebc, food_pairing, id} = props;

  return (
      <div className="card">
        <div className="card-image beer__img-wrap">
          <img src={`${image_url}`} alt={`${name}`} style={{width: 'auto'}} className="beer__img"/>
        </div>
        <div className="card-content">
          <span className="card-title">{name}</span>
          <span> {`ID: ${id}`}</span>
          <span> {`First brewed: ${first_brewed}`}</span>
          <span> {`ABV: ${abv}/`}</span>
          <span> {`IBU: ${ibu}/`}</span>
          <span> {`EBC: ${ebc}`}</span>
          <p>{`Food pairing: ${food_pairing}`}</p>
        </div>
      </div>
  )
};

export default BeerItem;
