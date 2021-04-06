// JavaScript source code
import React, { Component } from 'react';


class SortBy extends Component {

    render() {
        const { sortBy } = this.props
        return (
            <select className="form-control mr-sm-2" onChange={(e) => sortBy(e.target.value)}>
                <option value='cost_Ascending'>Price ascending</option>
                <option value='cost_Descending'>Price descending</option>
                <option value='name_Ascending'>Name ascending</option>
                <option value='name_Descending'>Name descending</option>
                <option value='name_Descending'>Most recent</option>
                <option value='name_Ascending'>Least recent</option>
            </select>
        )

    }

}

export default SortBy;
