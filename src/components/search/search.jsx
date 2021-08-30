import React, {Component} from 'react';

export default class Search extends Component{

  state = {
    searchText: ''
  };

  onSearch = (e) => {
    const searchText = e.target.value;
    this.setState({searchText});
    // таймаут нельзя, у тебя ситуация выходит та же, что и без него. Попробуй быстро ввести 20 символов - пойдет 20 запросов, мы такого хотим избежать. Поищи в гугле debounce
    setTimeout( this.props.onSearch(searchText), 200)
  };

  render() {
    return (
          <div className="input-field col s2">
            <input id="beer_name" type="text" className="validate" value={this.state.searchText} onChange={this.onSearch}/>
            <label htmlFor="beer_name">Beer name</label>
          </div>
    )
  }
};
