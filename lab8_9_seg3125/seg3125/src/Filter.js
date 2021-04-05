// JavaScript source code
import React, { Component } from 'react';

class Filter extends Component {

   render() {
      const { name, filters, method } = this.props;
      const valueList = filters.map((value, key) => {
         return (
             <option value={value} key={key}>{value}</option>
         )
      })
      return (
         <form>
              <label htmlFor="filters">Filter by {name}&nbsp;</label>
              <select name="filters" id={name + 'Filter'} onSelect={(e) => getFilter(name, e.target.value)}>
               <option value="0"></option>
               {valueList}
            </select>
         </form>
      );

   }

}

export default Filter;