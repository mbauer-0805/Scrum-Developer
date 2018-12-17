import React, {Component} from 'react';
import logo from './huoLong.png';
import './App.css';
import CustomComponent from "./CustomComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <CustomComponent title={"Digga"} description={"Dominik Stinkt"}/>
            </div>
        );
    }
}

export default App;
