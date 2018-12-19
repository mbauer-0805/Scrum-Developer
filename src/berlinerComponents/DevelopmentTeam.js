import React, {Component} from 'react';
import devteamgrafik from "../berlinerRes/devTeam.png";



class DevelopmentTeam extends Component {
    render() {
        return (
            <div>
                
               
                <p className="berlinercontent">
                    <h2>Development Team</h2>
                    <img src={devteamgrafik} width="800px" alt="devteam bild" />
                </p>
               
            </div>

        );

    }
}

export default DevelopmentTeam;
