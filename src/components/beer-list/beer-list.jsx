import React from 'react';
import BeerItem from "../beer-item";
import './beer-list.css';

export default class BeerList extends React.Component {
  render() {

    const {beers} = this.props;

    let elements = beers.map((beer) => {
      const {id, ...elProps} = beer;
      return (
          <li key={id} className="col xl3 l3 m3">
            <BeerItem
                {...elProps}
            />
          </li>
      )
    });

    return (
        <ul className="row beer-list">
          {elements}
        </ul>
    )
  }
};

