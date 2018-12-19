import React, {Component} from 'react';
import team from "../huoLongRes/scrumTeam.jpg";
import manifest from "../huoLongRes/Manifesto 1-6.JPG";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class Manifesto6 extends Component {

    render() {
        return (
            <div className="contentleft">
                <h2>Manifesto 1-6</h2>
                <img src={manifest} className="CustomComponent-Img-Rotate" alt=""/>
            </div>
        );
    }
}

export default Manifesto6;