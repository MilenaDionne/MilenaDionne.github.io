// JavaScript source code
import React, { Component } from 'react';


class SortBy extends Component {

    render() {
        const { sortBy } = this.props
        return (
            <select onChange={(e) => sortBy(e.target.value)}>
                <option value='cost_Ascending'>Price ascending</option>
                <option value='cost_Descending'>Price descending</option>
            </select>
        )

    }

}

export default SortBy;
