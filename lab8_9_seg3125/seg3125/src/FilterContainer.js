import React, { Component } from 'react'
import Filter from './Filter'

class FilterContainer extends Component {

    render() {
        const { filters, getFilter, removeFilters } = this.props;
        const filtersToRender = filters.map((filter, key) => {
            return (
                <Filter name={filter.name} key={key} filters={filter.values} getFilter={getFilter} removeFilters={removeFilters} />
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