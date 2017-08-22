import React, { Component } from 'react';
import Routes from './Routes.jsx'
import Navbar from './Navbar.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes/>
      </div>
    );
  }
}

export default App;
