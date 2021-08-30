import React from 'react';
import AppTitle from "../AppTitle";
import Search from "../Search";
import Filter from "../Filter";
import Pagination from "../Pagination";
import BeerList from "../BeerList";
import './App.css'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      filtersUrl: [],
      searchName: [],
      pageNumber: 1,
      pageSize: 10,
    };
  }

  fetchBeers = (filtersUrl, searchName, pageNumber = '1', pageSize = 10) => {
    fetch(`${process.env.REACT_APP_API_KEY}page=${pageNumber}&per_page=${pageSize}${searchName}${filtersUrl}`)
        .then(response => response.json())
        .then(result => this.setState({beers: result}))
  };

  // Стартовая загрузка данных 10 шт.
  componentDidMount() {
    this.fetchBeers('', '', 1, 10)
  }

  // Обновление стейта
  componentDidUpdate(prevState) {
    if (this.state.pageNumber !== prevState.pageNumber || this.state.pageSize !== prevState.pageSize || this.state.searchName !== prevState.searchName || this.state.filtersUrl !== prevState.filtersUrl) {
      this.fetchBeers(this.state.filtersUrl, this.state.searchName, this.state.pageNumber, this.state.pageSize)
    }
  }

  // Изменения номера страницы
  changePageNumber = (isNext) => {
    if (isNext) {
      this.setState(({pageNumber}) => ({
        pageNumber: pageNumber + 1
      }))
    } else {
      this.setState(({pageNumber}) => ({
        pageNumber: pageNumber - 1
      }))
    }
  };

  //Изменить размер страницы
  changePageSize = (e) => {
    this.setState({pageSize: e.target.value})
  };

  //Поиск
  changeSearchName = (searchText) => {
    this.setState({searchName: searchText})
  };

  //Фильтр
  changeFilterUrl = (url) => {
    this.setState({filtersUrl: url})
  };

  render() {
    const {beers, pageNumber, pageSize} = this.state;

    return (
        <div className="app container">
          <AppTitle/>
          <Search changeSearch={this.changeSearchName}/>

          <section>
            <Filter changeFilterUrl={this.changeFilterUrl}/>
          </section>

          <section>
            <Pagination pageNumber={pageNumber}
                        pageSize={pageSize}
                        changePageNumber={this.changePageNumber}
                        changePageSize={this.changePageSize}
            />
          </section>
          <section>
            <BeerList beers={beers}/>
          </section>
        </div>
    );
  }
}

