import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'




class NewPost extends Component {
    render() {
        return (
            <Col className="bg-white" >
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    New post
            </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6">
                                        <button type="button" className="btn bg-light w-100 h-100" title="add image"><h1>+</h1></button>
                                    </div>
                                    <div className="col-6">
                                        <Form>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                    Clothes type
                                            </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control as="select" className="my-1 mr-sm-2" custom>
                                                        <option value="0">Choose type..</option>
                                                        <option value="1">Tops</option>
                                                        <option value="2">Dresses</option>
                                                        <option value="3">Hats</option>
                                                        <option value="4">Jewelry</option>
                                                        <option value="5">Pants</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="2">
                                                    Price
                                            </Form.Label>
                                                <Col sm="10">
                                                    <Form.Control type="price" placeholder="Price" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="2">
                                                    Size
                                            </Form.Label>
                                                <Col sm="10">
                                                    <Form.Control as="select" className="my-1 mr-sm-2" custom>
                                                        <option value="0">Choose size..</option>
                                                        <option value="1">Small</option>
                                                        <option value="2">Medium</option>
                                                        <option value="3">Large</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>
                                                    Colors
                                            </Form.Label>
                                                <Col>
                                                    <Form.Control as="select" className="my-1 mr-sm-2" custom>
                                                        <option value="0">Main color</option>
                                                        <option value="1">Red</option>
                                                        <option value="2">Blue</option>
                                                        <option value="3">Yellow</option>
                                                        <option value="3">Black</option>
                                                        <option value="3">White</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>

        )
    }
}

export default NewPost;