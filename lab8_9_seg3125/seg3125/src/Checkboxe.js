// JavaScript source code
import React, { Component } from 'react';

class Checkbox extends Component {

    render() {
        const { filter, value, checked, selectFilter, getFilter } = this.props;
        return (
            <div>
                <input className="form-check-input" type="checkbox" name="filters" id={value} value={value} checked={checked} onChange={() => { getFilter(filter, value); selectFilter(value) }}></input>
                <label htmlFor={value} className="form-check-label">{value}</label>
            </div>
        );

    }

}

export default Checkbox;