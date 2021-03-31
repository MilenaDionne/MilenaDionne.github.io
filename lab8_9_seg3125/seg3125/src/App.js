import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NewPost from './components/NewPost'
import FilterContainer from './FilterContainer'
import PageTitle from './PageTitle'
import Search from './Search'

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
    }, {
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
      <div className="App">
        <Row>
          <PageTitle></PageTitle>
        </Row>
        <Row>
          <Col className="bg-white ml-1" sm={2}>
            <h3>Filters</h3>
            <FilterContainer></FilterContainer>
          </Col>

          <Col sm={9}>
            <Row>
              <Col sm={2}><NewPost /></Col>
              <Col sm={10}>
                <Search />
              </Col>
            </Row>
            {<ItemsContainer items={this.state.items} sizes={this.size}></ItemsContainer>}
          </Col>
        </Row>
      </div>
    );
  }
}


export default App;
