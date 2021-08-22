import React from 'react';

const SearchBeer = () => {
  return (
      <div className="input-field col s2">
        <input id="beer_name" type="text" className="validate"/>
        <label htmlFor="beer_name">Beer name</label>
      </div>
  )
};

export default SearchBeer;
