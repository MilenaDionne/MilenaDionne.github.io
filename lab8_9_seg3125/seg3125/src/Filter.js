// JavaScript source code
import React, { Component } from 'react';

class Filter extends Component {

   render() {
      const { name, value, filters } = this.props;
      const valueList = filters.map((value, key) => {
         return (
            <option key={key}>{value}</option>
         )
      })
      return (
         <form>
            <label htmlFor="filters">Filter by {name}&nbsp;</label>
            <select name="filters" id={name + 'Filter'}>
               {valueList}
            </select>
         </form>
      );

   }

}

export default Filter;