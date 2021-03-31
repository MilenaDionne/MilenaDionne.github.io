import React, { Component } from 'react'
import ReactTooltip from "react-tooltip";
import ItemModalView from './ItemModalView'

class Item extends Component {
    state = {
        show: false
    }
    closeModal = () => {
        this.setState({ show: false });
    }
    render() {
        const { item } = this.props;

        return (
            <div className="card img-fluid" style={{ width: '18rem' }}>
                <div className="card-body card-title text-center font-weight-bold">
                    {item.name}
                </div >
                <div >
                    <img src={item.imgSrc} alt="" className="card-img" />
                </div>
                <div className="row text-center">
                    <span className="col" data-tip data-for={item.id + 'type'}>{item.type}</span>
                    <ReactTooltip id={item.id + 'type'}>Type of clothe</ReactTooltip>
                    <span className="col" data-tip data-for={item.id + 'size'}>{item.size}</span>
                    <ReactTooltip id={item.id + 'size'}>Size</ReactTooltip>
                    <span className="col" data-tip data-for={item.id + 'cost'}>{item.cost}$</span>
                    <ReactTooltip id={item.id + 'cost'}>Price</ReactTooltip>
                </div>
                <button className="btn btn-primary " onClick={() => this.setState({ show: true })}>More information</button>

                <ItemModalView
                    show={this.state.show}
                    modalSize="m"
                    item={item}
                    closeModal={this.closeModal}

                >
                </ItemModalView>

            </div >
        )
    }
}

export default Item;