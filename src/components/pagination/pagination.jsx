import React, {Component} from 'react';
import './Pagination.css';

export default class Pagination extends Component {

  onPageSize = (e) => {
    this.props.changePageSize(e)
  };

  onPrevPage = () => {
    this.props.changePageNumber(false);
  };

  onNextPage = () => {
    this.props.changePageNumber(true);
  };

  render() {
    const {pageNumber} = this.props;

    let disabledBtn = false;
    if (pageNumber === 1) {
      disabledBtn = true
    }

    return (
        <>
          <p className="pagination__page">Page №: {pageNumber}</p>
          <div className="pagination">
            <button
                className="pagination__btn btn waves-effect waves-light"
                onClick={this.onPrevPage} disabled={disabledBtn}
            >
              Prev
            </button>
            <select className="pagination__select" onChange={this.onPageSize} defaultValue={'10'}>
              <option value="DEFAULT" disabled>Choose a page size ...</option>
              <option value="10">10</option>
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
        </>
    )
  }
}



