// JavaScript source code
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Search extends Component {

    render() {
        return (
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ width: '60%' }} />
                <Button variant="outline-success">Search</Button>
                <p className="ml-4">Sort By (to be implemented...)</p>
            </Form>
        )

    }

}

export default Search;