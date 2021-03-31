import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer';
import Navbar_app from './components/Navbar';
import Home from './components/Home';
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
      <Navbar_app/>
      <div className=" jumbotron text-center bg-dark text-white">
        <h1>Clothing Sale</h1>
      </div>
      

      <Home/>

      
      <br></br>
        { <ItemsContainer items={this.state.items} sizes={this.size}></ItemsContainer> }
      </div>
    );
  }
}

export default App;
