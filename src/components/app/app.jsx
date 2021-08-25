import React from 'react';
import AppTitle from "../app-title";
import SearchBeer from "../search-beer";
import Filter from "../filter";
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
  
  _pageNumber = 1;
  _pageSize = 10;

  // Загрузка данных
  fetchBeers = (url) => {
    this.setState({isFetching: true});
    fetch(`https://api.punkapi.com/v2/beers${url}`)
        .then(response => response.json())
        .then(result => this.setState({beers: result, isFetching: false}))
        .catch(e => console.log(e));
  };

  // Стартовая загрузка данных10 шт.
  componentDidMount() {
    this.fetchBeers(`?page=${this._pageNumber}&per_page=${this._pageSize}`)
  }


  // Сделать запрос на следующую страницу
  onFetchNextPage = () => {
    this._pageNumber++;
    this.fetchBeers(`?page=${this._pageNumber}&per_page=${this._pageSize}`)
  };

  // Сделать запрос на следующую страницу
  onFetchPrevPage = () => {
    this._pageNumber--;
    if (this._pageNumber <= 1) {
      this._pageNumber = 1;
    }
    this.fetchBeers(`?page=${this._pageNumber}&per_page=${this._pageSize}`)
  };

  //Изменить размер страницы
  changePageSize = (event) => {
    this._pageSize = event.target.value;
    this.fetchBeers(`?page=${this._pageNumber}&per_page=${this._pageSize}`)
  };

  //Поиск
  searchBeerFetch = (searchText) => {
    (!!searchText) && this.fetchBeers(`?beer_name=${searchText}`)
  };

  // Применение фильтров
  filterFetch = (url) => {
    this.fetchBeers(url)
  };

  render() {
    const {beers} = this.state;

    return (
        <div className="app container">
          <AppTitle/>
          <SearchBeer onSearch={this.searchBeerFetch}/>
          <section>
            <Filter filterFetch={this.filterFetch}/>
          </section>
          <section>
            <p className="pagination-page">Page №: {this._pageNumber}</p>
            <Pagination onFetchPrevPage={this.onFetchPrevPage} changePageSize={this.changePageSize}
                        onFetchNextPage={this.onFetchNextPage}/>
          </section>
          <section>
            <BeerList beers={beers}/>
          </section>
        </div>
    );
  }
}

