// JavaScript source code
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import SortBy from './SortBy'
import Col from 'react-bootstrap/esm/Col';

class Search extends Component {

    render() {
        return (
            <Form inline>
                <Col sm="10">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ width: '90%' }} />
                    <Button variant="outline-success">Search</Button>
                </Col>
                <Col sm="2">
                    <SortBy sortBy={this.props.sortBy} />
                </Col>
            </Form>
        )

    }

}

export default Search;