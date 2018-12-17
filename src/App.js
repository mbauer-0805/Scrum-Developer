import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import devteamgrafik from './devTeam.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Berliner Schmeh</h1>
          <h3>Introducing SCRUM Product Owner and Development Team.</h3>
        </header>
        <p className="App-intro">
          <img src={devteamgrafik} alt="devteam bild" />
        </p>
      </div>
    );
  }
}

export default App;
