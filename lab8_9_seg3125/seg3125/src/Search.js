// JavaScript source code
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import SortBy from './SortBy'

class Search extends Component {

    render() {
        return (
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ width: '60%' }} />
                <Button variant="outline-light" className="mr-sm-2">Search</Button>
                <SortBy sortBy={this.props.sortBy} />
            </Form>
        )

    }

}

export default Search;