// JavaScript source code
import React, { Component } from 'react';

class Checkbox extends Component {
    state = { checked: false }
    changeCheck = (getFilter, filter, value) => {
        getFilter(filter, value);
        this.setState({ checked: !this.state.checked })
    }
    render() {
        const { value, getFilter, filter } = this.props;
        return (
            <div>
                <input className="form-check-input" type="checkbox" name="filters" id={value} value={value} checked={this.state.checked} onChange={() => this.changeCheck(getFilter, filter, value)}></input>
                <label htmlFor={value} className="form-check-label">{value}</label>
            </div>
        );

    }

}

export default Checkbox;