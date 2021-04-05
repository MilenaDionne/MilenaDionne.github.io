import React, { Component } from 'react'
import Filter from './Filter'

class FilterContainer extends Component {

    render() {
        const { filters, getFilter } = this.props;
        const filtersToRender = filters.map((filter, key) => {
            return (
                <Filter name={filter.name} key={key} filters={filter.values} method={getFilter}/>
            )
        })
        return (
            <div>
                {filtersToRender}
            </div>
        );
    }


}

export default FilterContainer;