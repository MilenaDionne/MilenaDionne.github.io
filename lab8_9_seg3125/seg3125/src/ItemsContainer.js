import React, { Component, useState } from 'react'
import Item from './Item';

class ItemsContainer extends Component {
    items = this.props.items;
    sizes = this.props.sizes;

    render() {
        const list = this.items.map(item => {
            return (<Item item={item} key={item.id}></Item>)
        })

        return (
            <div className="container row">
                {list}
            </div>
        )
    }
}

export default ItemsContainer;