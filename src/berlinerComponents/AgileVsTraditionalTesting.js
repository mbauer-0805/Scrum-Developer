import React, {Component} from 'react';
import '../HuoLong.css';
import agileVsTraditiongrafik from '../berlinerRes/agileVsTradition.png';

class CommitStandards extends Component {
    render() {
        return (
            
            <p className="berlinercontent">
                    <img src={agileVsTraditiongrafik} width="300px" alt="agile vs tradition bild" />
                </p>

        );

    }
}

export default CommitStandards;
