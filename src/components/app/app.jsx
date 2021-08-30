import React from 'react';
import AppTitle from "../app-title";
import Search from "../search";
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

  // этих двоих однозначно нужно в state занести, у тебя при изменении не будет ререндера
  _pageNumber = 1;
  _pageSize = 10;

  // Загрузка данных
  fetchBeers = (url) => {
    this.setState({isFetching: true});
    // урл к апи желательно в .env выносить
    fetch(`https://api.punkapi.com/v2/beers${url}`)
        .then(response => response.json())
        .then(result => this.setState({beers: result, isFetching: false}))
        .catch(e => console.log(e));
  };

  // Стартовая загрузка данных10 шт.
  componentDidMount() {
    // у тебя строчка с query параметрами 4 раза повторяется в этом компоненте, строку параметров лучше создавать в fetchBeers, куда в аргументах функции мы можем передать необходимые параметры
    this.fetchBeers(`?page=${this._pageNumber}&per_page=${this._pageSize}`)
  }

  // Сделать запрос на следующую страницу
  onFetchNextPage = () => {
    this._pageNumber++;
    this.fetchBeers(`?page=${this._pageNumber}&per_page=${this._pageSize}`)
  };

  // Сделать запрос на предидущую страницу
  onFetchPrevPage = () => {
    this._pageNumber--;
    if (this._pageNumber <= 1) {
      this._pageNumber = 1;
    }
    this.fetchBeers(`?page=${this._pageNumber}&per_page=${this._pageSize}`)
  };

  //Изменить размер страницы
  changePageSize = (e) => {
    this._pageSize = e.target.value;
    this.fetchBeers(`?page=${this._pageNumber}&per_page=${this._pageSize}`)
  };

  //Поиск
  searchBeerFetch = (searchText) => {
    (!!searchText) && this.fetchBeers(`?beer_name=${searchText}`)
  };

  // Применение фильтров
  filterFetch = (url) => { // а для чего этот метод?
    this.fetchBeers(url)
  };

  render() {
    const {beers} = this.state;

    return (
        <div className="app container">
          <AppTitle/>
          <Search onSearch={this.searchBeerFetch}/>

          <section>
            <Filter filterFetch={this.filterFetch}/>
          </section>

          <section>
            <Pagination pageNumber={this._pageNumber}
                        onFetchPrevPage={this.onFetchPrevPage}
                        changePageSize={this.changePageSize}
                        onFetchNextPage={this.onFetchNextPage}/>
          </section>
          <section>
            <BeerList beers={beers}/>
          </section>
        </div>
    );
  }
}

