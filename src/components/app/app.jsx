import React from 'react';
import AppTitle from "../app-title";
import SearchBeer from "../search-beer";
import Filters from "../filters";
import FilterBtn from "../filter-btn";
import Pagination from "../pagination";
import BeerList from "../beer-list";

import './app.css'

export default class App extends React.Component{

  state = {
    beers: ['1'],
    isFetching: false
  };


  fetchBeers = () => {
    this.setState({...this.state, isFetching: true});

    fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(result => this.setState({beers: result, isFetching: false}))
        .catch(e => console.log(e));
  };


  componentDidMount() {
    this.fetchBeers()
  }
  // state = {
  //   beersItems: []
  // };
  //
  // componentDidMount() {
  //   this.startLoad();
  // }
  //
  // startLoad = async () => {
  //   this.setState({
  //     beersItems: await this.getResource()
  //   })
  // };



  _apiBase = 'https://api.punkapi.com/v2/beers';

  // getResource = async () => {
  //   const res = await fetch('https://api.punkapi.com/v2/beers');
  //
  //   if (!res.ok) {
  //     throw new Error(`Could not fetch, received ${res.status}`)
  //   }
  //   const beers = await res.json();
  //
  //   return beers;
  // };



  render() {


    // const {beerItems} = this.state;

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
            <BeerList beers={this.state.beers}/>
          </section>
        </div>
    );
  }

}

