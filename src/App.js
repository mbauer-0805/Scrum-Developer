import React, {Component} from 'react';
import logo from './huoLongRes/huoLong.png';
import './App.css';
import HuoLongComponent from "./HuoLongComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>

                <HuoLongComponent/>
            </div>
        );
    }
}

export default App;
