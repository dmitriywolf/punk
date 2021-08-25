import React from 'react';
import './pagination.css';

export default class Pagination extends React.Component {

  onPageSize = (e) => {
    this.props.changePageSize(e)
  };

  onPrevPage = () => {
    this.props.onFetchPrevPage();
  };

  onNextPage = () => {
    this.props.onFetchNextPage();
  };

  render() {

    return (
        <div className="pagination">
          <button
              className="pagination__btn btn waves-effect waves-light"
              onClick={this.onPrevPage}
          >
            Prev
          </button>
          <select className="pagination-select" onChange={this.onPageSize}>
            <option value="10" selected>10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
          </select>
          <button
              className="pagination__btn btn waves-effect waves-light"
              onClick={this.onNextPage}>
            Next
          </button>
        </div>
    )
  }
}



