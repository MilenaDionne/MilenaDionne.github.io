// JavaScript source code
import React, { Component } from 'react';
import Checkbox from './Checkboxe';

class Filter extends Component {


   render() {
      const { name, filters, getFilter } = this.props;
      const valueList = filters.map((value, key) => {
         return (
            <Checkbox value={value} key={key} getFilter={getFilter} filter={name} />
         )
      })
      return (


         <form>
            <label htmlFor="filters"><b>{name}&nbsp;</b></label>
            <div className="form-check ml-2" id={name + 'Filter'}>
               {valueList}
            </div>
            <br></br>
         </form >
      );

   }

}

export default Filter;