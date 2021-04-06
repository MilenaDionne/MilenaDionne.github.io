// JavaScript source code
import React, { Component } from 'react';

class Filter extends Component {

   render() {
      const { name, filters, getFilter } = this.props;
      const valueList = filters.map((value, key) => {
         return (
            <div key={key}> 
               <input className="form-check-input" type="radio" name="filters" id={value} value={value}></input> 
               <label htmlFor={value} className="form-check-label">{value}</label> 
            </div>
            
         )
      })
      return (
         
         <form>
            <label htmlFor="filters">{name}&nbsp;</label>
            <div className="form-check ml-2" id={name + 'Filter'} onChange={(e) => getFilter(name, e.target.value)}>
               {valueList}
            </div>
            <br></br>
         </form>
      );

   }

}

export default Filter;