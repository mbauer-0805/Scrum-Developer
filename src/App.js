import React, {Component} from 'react';
import logo from './huoLong.PNG';
import './App.css';
import CustomComponent from "./CustomComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>

                <CustomComponent/>
            </div>
        );
    }
}

export default App;
