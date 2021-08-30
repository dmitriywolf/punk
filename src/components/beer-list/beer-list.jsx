import React, {Component} from 'react';
import BeerItem from "../beer-item";
import './beer-list.css';

export default class BeerList extends Component {

  render() {

    const {beers} = this.props;

    // зачем тут let, если можно const?
    let elements = beers.map((beer) => {
      const {...elProps} = beer; // выглядит как лишняя строчка, мы можем ниже просто beer использовать
      return (
          <li key={beer.id} className="col xl3 l3 m3">
            <BeerItem
                {...elProps}
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

