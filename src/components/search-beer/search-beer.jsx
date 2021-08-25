import React from 'react';

export default class SearchBeer extends React.Component {

  state = {
    searchText: ''
  };

  onSearch = (e) => {
    const searchText = e.target.value;
    this.setState({searchText});
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
