import React from 'react';
import AppTitle from "../app-title";
import SearchBeer from "../search-beer";
import Filters from "../filters";
import FilterBtn from "../filter-btn";
import Pagination from "../pagination";
import BeerList from "../beer-list";
import './app.css'

function App() {

  return (
      <div className="app container">
        <AppTitle/>
        <SearchBeer/>

        <section>
          <Filters/>
          <FilterBtn/>
        </section>

        <section>
          <Pagination/>
        </section>

        <section>
          <BeerList/>
        </section>
      </div>
  );
}

export default App;
