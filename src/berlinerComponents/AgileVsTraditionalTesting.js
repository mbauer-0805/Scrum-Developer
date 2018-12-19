import React, {Component} from 'react';
import '../HuoLong.css';
import agileVsTraditiongrafik from '../berlinerRes/agileVsTradition.png';

class AgileVsTradition extends Component {
    render() {
        return (
            
            <p className="berlinercontent">
                    <img src={agileVsTraditiongrafik} width="700px" alt="agile vs tradition bild" />
                </p>

        );

    }
}

export default AgileVsTradition;
