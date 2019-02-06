import React, { Component } from 'react';
import logo from './logo.svg';
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <section>
        <Header />
        <Card/>
        </section>
      </div>
    );
  }
}

export default App;
