import React, {Component} from 'react';

export default class Filter extends Component {

  filterObj = {
    abv_gt: '',
    abv_lt: '',
    ibu_gt: '',
    ibu_lt: '',
    ebc_gt: '',
    ebc_lt: '',
    yeast: '',
    brewed_before: '',
    brewed_after: '',
    hops: '',
    malt: '',
    food: '',
    ids: ''
  };

  state = {
    filters: this.filterObj
  };

  // События изменения инпутов
  handleInputChange = (e) => {
    const name = e.target.name;
    const value = (e.target.name === 'brewed_before' || e.target.name === 'brewed_after') ? this.modifyDate(e.target.value) : e.target.value;

    for (let key in this.filterObj) {
      if (key === name) {
        this.filterObj[name] = value;
      }
    }
    this.setState({filters: this.filterObj})
  };

  //Функция модифицырования дат
  modifyDate(str) {
    const year = str.slice(0, 4);
    const month = str.slice(5, 7);
    return `${month}-${year}`;
  }

  // Отправка запроса
  filterFetch = (e) => {
    e.preventDefault();
    this.props.changeFilterUrl(this.createFilterURL());
    this.clearForm()
  };

  // Очистка полей формы
  clearForm = () => {
    for (let key in this.filterObj) {
      this.filterObj[key] = '';
    }
    this.setState({filters: this.filterObj})
  };

  // Создание URL для запроса
  createFilterURL() {
    let url = '&';

    for (let key in this.filterObj) {
      if (this.filterObj[key]) {
        url += `${key}=${this.filterObj[key]}&`
      }
    }
    return url;
  }

  render() {

    const {abv_gt, abv_lt, ibu_gt, ibu_lt, ebc_gt, ebc_lt, yeast, hops, malt, food, ids} = this.state.filters;

    return (
        <form name="filter_form" className="col s12">
          <div className="row">
            <div className="input-field col s2">
              <input id="abv_gt" name="abv_gt" type="number" minLength={0} className="validate" value={abv_gt}
                     onChange={this.handleInputChange}/>
              <label htmlFor="abv_gt">ABV greater than</label>
            </div>

            <div className="input-field col s2">
              <input id="abv_lt" name="abv_lt" type="number" minLength={0} className="validate" value={abv_lt}
                     onChange={this.handleInputChange}/>
              <label htmlFor="abv_lt">ABV less than</label>
            </div>

            <div className="input-field col s2">
              <input id="ibu_gt" name="ibu_gt" type="number" minLength={0} className="validate" value={ibu_gt}
                     onChange={this.handleInputChange}/>
              <label htmlFor="ibu_gt">IBU greater than</label>
            </div>

            <div className="input-field col s2">
              <input id="ibu_lt" name="ibu_lt" type="number" minLength={0} className="validate" value={ibu_lt}
                     onChange={this.handleInputChange}/>
              <label htmlFor="ibu_lt">IBU less than</label>
            </div>

            <div className="input-field col s2">
              <input id="ebc_gt" name="ebc_gt" type="number" minLength={0} className="validate" value={ebc_gt}
                     onChange={this.handleInputChange}/>
              <label htmlFor="ebc_gt">EBC greater than</label>
            </div>

            <div className="input-field col s2">
              <input id="ebc_lt" name="ebc_lt" type="number" minLength={0} className="validate" value={ebc_lt}
                     onChange={this.handleInputChange}/>
              <label htmlFor="ebc_lt">EBC less than</label>
            </div>

            <div className="input-field col s2">
              <input id="yeast" name="yeast" type="text" className="validate" value={yeast}
                     onChange={this.handleInputChange}/>
              <label htmlFor="yeast">Yeast name</label>
            </div>

            <div className="input-field col s2">
              <input id="brewed_before" name="brewed_before" type="date" className="validate"
                     onChange={this.handleInputChange}/>
              <label htmlFor="brewed_before">Brewed before this date</label>
            </div>

            <div className="input-field col s2">
              <input id="brewed_after" name="brewed_after" type="date" className="validate"
                     onChange={this.handleInputChange}/>
              <label htmlFor="brewed_after">Brewed after this date</label>
            </div>

            <div className="input-field col s2">
              <input id="hops" name="hops" type="text" className="validate" onChange={this.handleInputChange}
                     value={hops}/>
              <label htmlFor="hops">Hops title</label>
            </div>

            <div className="input-field col s2">
              <input id="malt" name="malt" type="text" className="validate" onChange={this.handleInputChange}
                     value={malt}/>
              <label htmlFor="malt">Malt title</label>
            </div>

            <div className="input-field col s2">
              <input id="food" name="food" type="text" className="validate" onChange={this.handleInputChange}
                     value={food}/>
              <label htmlFor="food">Suitable food</label>
            </div>

            <div className="input-field col s2">
              <input id="ids" name="ids" type="text" className="validate" onChange={this.handleInputChange}
                     value={ids}/>
              <label htmlFor="ids">ID</label>
            </div>
          </div>

          <button
              className="btn waves-effect waves-light"
              type="submit"
              onClick={this.filterFetch}>
            Apply
          </button>

        </form>
    )
  }
};

