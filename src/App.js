import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import About from './components/about/About';
import Team from './components/team/Team';
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default App;
