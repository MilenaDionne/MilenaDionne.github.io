import React, { Component } from 'react'
import Item from './Item';

class ItemsContainer extends Component {
    render() {
        const { items, language } = this.props
        const list = items.map(item => {
            return (<Item item={item} key={'Item' + item.id} language={language}></Item>)
        })

        return (
            <div className="row">
                {list}
            </div>
        )
    }
}

export default ItemsContainer;