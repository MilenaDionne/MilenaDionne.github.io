// JavaScript source code
import React, { Component } from 'react';

class Filter extends Component {

   render() {
      const { name, value, filters } = this.props;
      const valueList = filters.map(value => {
         return (
            <option>{value}</option>
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