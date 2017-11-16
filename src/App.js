import React, { Component } from 'react';
import logo from './images/campspot_logo.png';
import MainView from './components/MainView.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="campspot-container">
            <header className="campspot-header">
                <img src={logo} className="campspot-logo" alt="logo" />
            </header>
            <MainView />
        </div>
    );
  }
}

export default App;
