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
            <div className="card img-fluid m-3" style={{ width: '18rem' }}>
                <div className="card-body card-title text-center font-weight-bold">
                    {item.name}
                </div >
                <div >
                    <img src={item.imgSrc} alt="" className="card-img" />
                </div>
                <div className="row text-center">
                    <span className="col">
                        <img src="./icons/typeClothes.png" alt="" className="img-fluid" style={{ width: '1rem' }} />
                        <span className="" data-tip data-for={item.id + 'type'}>
                            {item.type}
                        </span>
                    </span>


                    <span className="col">
                        <img src="./icons/size.png" alt="" className="img-fluid" style={{ width: '1rem' }} />
                        <span className="" data-tip data-for={item.id + 'size'}>{item.size}</span>
                    </span>

                    <span className="col">
                        <img src="./icons/dollarIcon.png" alt="" className="img-fluid" style={{ width: '1rem' }} />
                        <span className="" data-tip data-for={item.id + 'cost'}>{item.cost}</span>
                    </span>

                </div>
                <button className="btn btn-primary " onClick={() => this.setState({ show: true })}>More information</button>
                <ReactTooltip id={item.id + 'size'}>Size</ReactTooltip>
                <ReactTooltip id={item.id + 'cost'}>Price</ReactTooltip>
                <ReactTooltip id={item.id + 'type'}>Type of clothes</ReactTooltip>
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