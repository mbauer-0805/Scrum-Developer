import React, {Component} from 'react';
import manifestografik from "../berlinerRes/manifesto.jpg";

class Manifest extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>Manifest 7 - 12</h2>
                    <img src={manifestografik} alt="manifesto bild" />

                </p>
            </div>

        );

    }
}

export default Manifest;
