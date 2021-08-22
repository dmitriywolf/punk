import React from 'react';


const BeerItem = () => {
  return (
      <div className="col xl3 l3 m3">
        <div className="card">
          <div className="card-image">
            <img src="https://aquamarket.ua/29726-large_default/slavutich-ice-mix-lime-pivo-svitle-filtrovane-35-05-l-zherstyana-banka.jpg" alt={"ee"}/>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
          </div>
        </div>
      </div>
  )
};

export default BeerItem;
