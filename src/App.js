import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Navbar2 from './components/Navbar2';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <Navbar2 />
        <Home />
        <Footer/>
      </div>
    )
  }
}

export default App
