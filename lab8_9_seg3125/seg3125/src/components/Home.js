import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'



const Home = () => {
    return (
        
        <Row>
            <Col className="bg-white" sm={2}>
                <Row>
                <Col>
                <h3>Categories</h3>
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </Col>
                
                </Row>
            </Col>
            <Col className="bg-white" sm={1}>
                <Button className="btn-dark">New Post</Button>
            </Col>
            <Col sm={7}>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Col>
            <Col className="bg-white" sm={2}>
            <h2>Sort by</h2>
        </Col>
            
        </Row>
        
    )
}

export default Home 