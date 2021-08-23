import React from 'react';
import AppTitle from "../app-title";
import SearchBeer from "../search-beer";
import Filters from "../filters";
import FilterBtn from "../filter-btn";
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

  _pageNumber = 1;
  _pageSize = 10;
  _defaultURL = `?page=${this._pageNumber}&per_page=${this._pageSize}`;

  fetchBeers = (url) => {
    this.setState({isFetching: true});

    fetch(`${this._apiBase}${url}`)
        .then(response => response.json())
        .then(result => this.setState({beers: result, isFetching: false}))
        .catch(e => console.log(e));
  };

  // Стартовая загрузка элементов 10 шт.
  componentDidMount() {
    this.fetchBeers(this._defaultURL)
  }

  onFetchNextPage = () => {
    this._pageNumber++;
    console.log(this._pageNumber);
    this.fetchBeers(`?page=${this._pageNumber}&per_page=${this._pageSize}`)
  };
  onFetchNextPrev = () => {
    this._pageNumber--;
    if(this._pageNumber <= 1) {
      this._pageNumber = 1;
    }
    this.fetchBeers(`?page=${this._pageNumber}&per_page=${this._pageSize}`)
  };

  changePageSize = (event) => {
    this._pageSize = event.target.value;
    this.fetchBeers(`?page=${this._pageNumber}&per_page=${this._pageSize}`)
  };

  searchBeerFetch = (searchText) => {
    (!!searchText) && this.fetchBeers(`?beer_name=${searchText}`)
  };


  render() {

    const {beers} = this.state;


    return (
        <div className="app container">
          <AppTitle/>

          <SearchBeer onSearch={this.searchBeerFetch}/>

          <section>
            <Filters/>
            <FilterBtn/>
          </section>
          <section>
            <p className="pagination-page">Page №: {this._pageNumber}</p>
            <div className="pagination">
              <button
                  className="pagination__btn btn waves-effect waves-light"
                  onClick={this.onFetchNextPrev}
              >
                Prev
              </button>
              <select className="pagination-select" onChange={this.changePageSize}>
                <option value="10" selected>10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
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

