import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer';
import Navbar_app from './components/Navbar';
import SearchBar from './SearchBar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NewPost from './components/NewPost'

class App extends Component {
  size = {
    XS: 'Extra Small',
    S: 'Small',
    M: 'Medium',
    L: 'Large',
    XL: 'Extra Large',
    XXL: 'Extra Extra Large'
  }


  state = {
    idCount: 2,

    items: [{
      id: 1,
      name: 'Biking-Shirt',
      imgSrc: '../images/Biking-Shirt_T-Shirt_M_Blue_None_30_JL.jpg',
      cost: 30,
      size: this.size.M,
      type: 'T-Shirt',
      mainColor: 'Blue',
      secondaryColor: 'Red',
      description: 'Perfect T-Shirt for biking',
      owner: {
        name: 'JL',
        email: 'fakeemail@gmail.com',
        phone: '819-123-4568'
      }
    },]
  }
  render() {
    return (
      <div className="App" >

        <div className="jumbotron text-center bg-dark text-white">
            <h1>Trendy Apparel Trade</h1>
        </div>
      <Row>
          <Col className="bg-white" sm={2}>
              <Col>
              <h3>Categories</h3>
                  <ul className="nav nav-pills flex-column">
                      <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                      </li>
                  </ul>
              </Col>
          </Col>
          { <NewPost></NewPost> }
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
      

      <br></br>
        { <ItemsContainer items={this.state.items} sizes={this.size}></ItemsContainer> }
      </div>
    );
  }
}

export default App;
