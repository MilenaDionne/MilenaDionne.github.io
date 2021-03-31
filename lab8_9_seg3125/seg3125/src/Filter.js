// JavaScript source code
import React, { Component } from 'react';

class Filter extends Component {

   render() {
      const { name, value, filters } = this.props;
      console.log(filters)
      const valueList = filters.map((value, key) => {
         return (
            <option key={key}>{value}</option>
         )
      })
      return (
         <form>
            <label for="filters">Filter by {name}&nbsp;</label>
            <select name="filters" id="filters">
               {valueList}
            </select>
         </form>
      );

   }

}

export default Filter;