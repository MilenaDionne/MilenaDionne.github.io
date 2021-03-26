import React, { Component } from 'react';
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
      name: 'Blue T-Shirt',
      imgSrc: '../images/Blue_T-Shirt_M_Blue_None_30_JL.jpg',
      cost: 30,
      size: this.size.M,
      mainColor: 'Blue',
      secondarColor: null,
      description: 'Perfect T-Shirt for biking',
      owner: {
        name: 'JL',
        email: 'fakeemail@gmail.com',
        phone: '8191234568'
      }
    }]
  }
  render() {
    return (
      <div className="App" >
      </div>
    );
  }
}

export default App;
