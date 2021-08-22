import React from 'react';

const Filters = () => {

  return (
      <div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s2">
              <input id="abv_gt" type="number" className="validate"/>
              <label htmlFor="abv_gt">ABV greater than</label>
            </div>

            <div className="input-field col s2">
              <input id="abv_lt" type="number" className="validate"/>
              <label htmlFor="abv_lt">ABV less than</label>
            </div>

            <div className="input-field col s2">
              <input id="ibu_gt" type="number" className="validate"/>
              <label htmlFor="ibu_gt">IBU greater than</label>
            </div>

            <div className="input-field col s2">
              <input id="ibu_lt" type="number" className="validate"/>
              <label htmlFor="ibu_lt">IBU less than</label>
            </div>

            <div className="input-field col s2">
              <input id="ebc_gt" type="number" className="validate"/>
              <label htmlFor="ebc_gt">EBC greater than</label>
            </div>

            <div className="input-field col s2">
              <input id="ebc_lt" type="number" className="validate"/>
              <label htmlFor="ebc_lt">EBC less than</label>
            </div>

            <div className="input-field col s2">
              <input id="yeast" type="text" className="validate"/>
              <label htmlFor="yeast">Yeast name</label>
            </div>

            <div className="input-field col s2">
              <input id="brewed_before" type="date" className="validate"/>
              <label htmlFor="brewed_before">Brewed before this date</label>
            </div>

            <div className="input-field col s2">
              <input id="brewed_after" type="date" className="validate"/>
              <label htmlFor="brewed_after">Brewed after this date</label>
            </div>

            <div className="input-field col s2">
              <input id="hops" type="text" className="validate"/>
              <label htmlFor="hops">Hops title</label>
            </div>

            <div className="input-field col s2">
              <input id="malt" type="text" className="validate"/>
              <label htmlFor="malt">Malt title</label>
            </div>

            <div className="input-field col s2">
              <input id="food" type="text" className="validate"/>
              <label htmlFor="food">Suitable food</label>
            </div>

            <div className="input-field col s2">
              <input id="ids" type="text" className="validate"/>
              <label htmlFor="ids">ID</label>
            </div>
          </div>
        </form>
      </div>
  )
};

export default Filters;
