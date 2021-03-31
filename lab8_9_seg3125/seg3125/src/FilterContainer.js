import React, { Component } from 'react'
import Filter from './Filter'
import ReactTooltip from "react-tooltip";
import ItemModalView from './ItemModalView'

class FilterContainer extends Component {


    render() {
        return (
            <div>
                <Filter name="size" value="none" filters={["", "extra small", "small", "meduim", "large", "extra large"]} />
                <br></br>
                <Filter name="price" value="none" filters={["", "0-9", "10-19", "20-29", "30-39", "40+"]} />
                <br></br>
                <Filter name="type" value="none" filters={["", "headwear", "shirt", "pants", "socks", "shoes"]} />
            </div>
        );
    }


}

export default FilterContainer;