import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import devteamgrafik from './devTeam.png';
import productownergrafik from './productOwner.png';
import berlingrafik from './berlin.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={berlingrafik} className="App-logo" alt="logo" />
          <h1 className="App-title">Team Berliner Schmeh</h1>
        </header>
        
        <p className="DevTeam-intro">
          <h2>Development Team</h2>
          <img src={devteamgrafik} width="830" alt="devteam bild" />
        </p>
        
        <p className="ProductOwner-intro">
          <h2>Product Owner</h2>
          <img src={productownergrafik} alt="productowner bild" />
        </p>

      </div>
    );
  }
}

export default App;
