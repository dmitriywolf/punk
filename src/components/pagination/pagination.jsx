import React from 'react';

import './pagination.css';

const Pagination = (props) => {

  const {changePageNumberOnPrev, changePageNumberOnNext, pageNumber, pageSize} = props;

  return (
      <div className="pagination">
        <button
            className="pagination__btn btn waves-effect waves-light"
            onClick={() => changePageNumberOnPrev()}
        >
          Prev
        </button>
        <div >
          <select className="pagination-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <button
            className="pagination__btn btn waves-effect waves-light"
            onClick={() => changePageNumberOnNext()}>
          Next
        </button>

      </div>
  )
};

export default Pagination;
