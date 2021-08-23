import React from 'react';
import AppTitle from "../app-title";
import SearchBeer from "../search-beer";
import Filters from "../filters";
import FilterBtn from "../filter-btn";
import Pagination from "../pagination";
import BeerList from "../beer-list";

import './app.css'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      beers: [{id: 1}],
      isFetching: false,
    };
  }


  _apiBase = 'https://api.punkapi.com/v2/beers';
  pageNumber = 1;
  pageSize = 25;

  fetchBeers = (url) => {
    this.setState({isFetching: true});

    fetch(`${this._apiBase}${url}`)
        .then(response => response.json())
        .then(result => this.setState({beers: result, isFetching: false}))
        .catch(e => console.log(e));
  };

  // Стартовая загрузка элементов 25 шт.
  componentDidMount() {
    this.fetchBeers('')
  }


  onFetchNextPage = () => {
    this.pageNumber++;
    console.log(this.pageNumber);
    this.fetchBeers(`?page=${this.pageNumber}`)
  };
  onFetchNextPrev = () => {
    this.pageNumber--;
    if(this.pageNumber <= 1) {
      this.pageNumber = 1;
    }
    console.log(this.pageNumber);
    this.fetchBeers(`?page=${this.pageNumber}`)
  };


  render() {

    const {beers} = this.state;


    return (
        <div className="app container">
          <AppTitle/>
          <SearchBeer/>

          <section>
            <Filters/>
            <FilterBtn/>
          </section>

          <section>
            <div className="pagination">
              <button
                  className="pagination__btn btn waves-effect waves-light"
                  onClick={this.onFetchNextPrev}
              >
                Prev
              </button>

              <select className="pagination-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>


              <button
                  className="pagination__btn btn waves-effect waves-light"
                  onClick={this.onFetchNextPage}>
                Next
              </button>

            </div>
          </section>

          <section>
            <BeerList beers={beers}/>
          </section>
        </div>
    );
  }

}

