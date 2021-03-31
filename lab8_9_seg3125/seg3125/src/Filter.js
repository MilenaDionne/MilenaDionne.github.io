// JavaScript source code
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactTooltip from "react-tooltip";


class Filter extends Component {
    
    render() {
      const { name, value, filters } = this.props;
      return (
         <form>
            <label for="filters">Filter by {name}</label>
                 <select name="filters" id="filters">
                    <option>{filters[0]}</option>
                    <option>{filters[1]}</option>
                    <option>{filters[2]}</option>
                    <option>{filters[3]}</option>
                    <option>{filters[4]}</option>
                    </select>
         </form>
      );
              
    }

}

export default Filter;