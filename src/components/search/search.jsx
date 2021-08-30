import React, {Component} from 'react';
import {DebounceInput} from 'react-debounce-input';

export default class Search extends Component {

  onSearchText = (e) => {
    if (e.target.value === '') {
      this.props.changeSearch([])
    } else {
      this.props.changeSearch(`&beer_name=${e.target.value}`)
    }
  };

  render() {

    return (
        <div className="input-field col s2">
          <DebounceInput
              id="beer_name" type="text" className="validate"
              minLength={2}
              debounceTimeout={500}
              onChange={this.onSearchText}
          />
          <label htmlFor="beer_name">Beer name</label>
        </div>
    )
  }
};
