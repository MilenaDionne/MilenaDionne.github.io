import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/esm/FormGroup'



class NewPost extends Component {
    render(){
        return (  
            <Col className="bg-white" sm={1}>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                New post
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
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
                                        <FormGroup>
                                            <label> 
                                                Clothes type
                                            </label>
                                            <select id="inputState" className="form-control">
                                                <option selected>Choose type..</option>
                                                <option>Tops</option>
                                                <option>Dresses</option>
                                                <option>Hats</option>
                                                <option>Jewelry</option>
                                            </select>
                                        </FormGroup>
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