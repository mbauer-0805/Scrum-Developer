import React, {Component} from 'react';
import './HuoLong.css';
import HuoLongComponent from './HuoLongComponent.js';
import BerlinerComponent from './BerlinerComponent.js';


class App extends Component {
    render() {
        return (
            <div>
                <BerlinerComponent/>

                < HuoLongComponent/>
            </div>

        );

    }
}

export default App;
