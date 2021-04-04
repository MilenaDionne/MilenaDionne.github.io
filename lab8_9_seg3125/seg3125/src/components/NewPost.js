import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import l from '../locate';


class NewPost extends Component {
    render() {
        const { language, filters, sizes, colors} = this.props;

        const valueColors = colors.map((value, key) => {
            return (
               <option key={key}>{l(language, value)}</option>
            )
         })
         
         const clothsType = filters.values.map((value, key) => {
            return (
               <option key={key}>{l(language, value)}</option>
            )
         })

        return (
            <Col className="bg-white" >
                <button type="button" className="btn btn-primary w-100" data-toggle="modal" data-target="#exampleModal">
                    {l(language, 'NewPostTitle')}
            </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{l(language, 'NewPostTitle')}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6">
                                        <button type="button" className="btn bg-light w-100 h-100" title={l(language, 'Picture')}><h1>+</h1></button>
                                    </div>
                                    <div className="col-6">
                                        <Form>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="4">
                                                    {l(language, 'ItemType')}
                                            </Form.Label>
                                                <Col sm="8">
                                                    <Form.Control as="select" className="my-1 mr-sm-2" custom>
                                                        <option value="0"> {l(language, 'SelectType')}</option>
                                                        {clothsType}
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="2">
                                                {l(language, 'ItemPrice')}
                                                </Form.Label>
                                                <Col sm="10">
                                                    <Form.Control type="price" placeholder={l(language, 'ItemPrice')} />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="2">
                                                {l(language, "ItemSize")}
                                            </Form.Label>
                                                <Col sm="10">
                                                    <Form.Control as="select" className="my-1 mr-sm-2" custom>
                                                        <option value="0">{l(language, "ChooseSize")}</option>
                                                        <option value="1">{l(language, sizes.XS)}</option>
                                                        <option value="1">{l(language, sizes.S)}</option>
                                                        <option value="1">{l(language, sizes.M)}</option>
                                                        <option value="1">{l(language, sizes.L)}</option>
                                                        <option value="1">{l(language, sizes.XL)}</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Row>
                                                    <Col>
                                                        <Form.Control as="select" className="my-1 mr-sm-2" custom>
                                                            <option value="0"> {l(language, "Color1")}</option>
                                                            {valueColors}
                                                        </Form.Control>
                                                    </Col>
                                                    <Col>
                                                        <Form.Control as="select" className="my-1 mr-sm-2" custom>
                                                            <option value="0">{l(language, "Color2")}</option>
                                                            {valueColors}
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                    <div>
                                        <h4>{l(language, 'NewContactInfo')}</h4>
                                    </div>
                                    <Form>
                                        <Form.Row>
                                            <Col>
                                                <Form.Control placeholder={l(language, 'NewContactName')} />
                                                
                                            </Col>
                                            <Col>
                                                <Form.Control placeholder={l(language, 'NewContactEmail')} />
                                                
                                            </Col>
                                        </Form.Row>
                                        <br></br>
                                        <Form.Row>
                                            <Col>
                                                <Form.Control placeholder={l(language, 'NewContactPhone')} />
                                            </Col>
                                            <Col>
                                                <Form.Group id="formGridCheckbox">
                                                    <Form.Check type="checkbox" label={l(language, 'NewAgreementConditions')} />
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">{l(language, 'Cancel')}</button>
                                <button type="submit" className="btn btn-primary" data-dismiss="modal">{l(language, 'AddPost')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>

        )
    }
}

export default NewPost;