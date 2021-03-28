import React, { Component } from 'react'
import ReactTooltip from "react-tooltip";
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalBody from 'react-bootstrap/ModalBody';

class ItemModalView extends Component {
    state = {
        hideOwnerInfo: true,
        contactOwnerBtnText: 'Contact Owner'
    }

    changeHideOwnerInfo = () => {
        this.setState({ hideOwnerInfo: !this.state.hideOwnerInfo });
    }

    changeContactOwnerBtnText = () => {
        if (this.state.hideOwnerInfo) {
            this.setState({
                contactOwnerBtnText: 'Hide owner\'s information'
            })
        }
        else {
            this.setState({
                contactOwnerBtnText: 'Contact Owner'
            })
        }
    }

    btnOnClick = () => {
        this.changeContactOwnerBtnText();
        this.changeHideOwnerInfo();
    }
    render() {
        const { item, modalSize, show, closeModal } = this.props;

        return (
            <Modal
                keyboard={false}
                show={show}
                size={modalSize}
                onHide={closeModal}
                onExit={closeModal}
            >
                <ModalTitle className="text-center">
                    {item.name}
                    <button className="close mr-2" onClick={closeModal}>&times;</button>
                </ModalTitle>
                <ModalBody>
                    <div className="row">
                        <div className="col-6">
                            <img src={item.imgSrc} alt="" className="img-fluid" />
                        </div>
                        <div className="col-6">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th className="pr-4" scope="row">Clothes type</th>
                                        <td>{item.type}</td>
                                    </tr>
                                    <tr>
                                        <th className="pr-4" scope="row">Price</th>
                                        <td>{item.cost}</td>
                                    </tr>
                                    <tr>
                                        <th className="pr-4" scope="row">Size</th>
                                        <td>{item.size}$</td>
                                    </tr>
                                    <tr>
                                        <th className="pr-4" scope="row">{item.secondaryColor ? 'Colors' : 'Color'}</th>
                                        <td>{item.mainColor}{item.secondaryColor ? ' and ' + item.secondaryColor : ''}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <strong> Owner's comment :</strong>  {item.description}
                    </div>
                    <div className="text-center mt-2 mb-2">
                        <button className="btn btn-primary" onClick={this.btnOnClick}>{this.state.contactOwnerBtnText}</button>
                    </div>
                    <div hidden={this.state.hideOwnerInfo}>
                        {/* <div className="row">
                            <span className="col"><strong>Name : </strong>  {item.owner.name}</span>
                            <span className="col"><strong>Email: </strong>{item.owner.email}</span>
                        </div>
                        <div className="row">
                            <span className="col"><strong>Phone number :</strong> {item.owner.phone}</span>
                        </div> */}

                        <table className="table text-center">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{item.owner.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{item.owner.email}</td>
                                </tr>
                                <tr>
                                    <th>Phone Number</th>
                                    <td>{item.owner.phone}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </ModalBody>
            </Modal >

        )
    }
}

export default ItemModalView;