import React from 'react';


const BeerItem = (props) => {

  const {name, first_brewed, image_url, abv, ibu, ebc, food_pairing} = props;

  return (
      <div className="card">
        <div className="card-image" style={{display: 'flex', justifyContent: 'center'}}>
          <img src={`${image_url}`} alt={`${name}`} style={{maxHeight: '250px', width: 'auto'}}/>
        </div>
        <div className="card-content">
          <span className="card-title">{name}</span>
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
