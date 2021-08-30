import React, {Component} from 'react';
import BeerItem from "../BeerItem";
import './BeerList.css';

export default class BeerList extends Component {

  render() {

    const {beers} = this.props;

    let elements = beers.map((beer) => {
      return (
          <li key={beer.id} className="col xl3 l3 m3">
            <BeerItem
                {...beer}
            />
          </li>
      )
    });

    return (
        <ul className="row beer__list">
          {elements}
        </ul>
    )
  }
};

