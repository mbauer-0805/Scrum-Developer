import React, {Component} from 'react';
import sBacklog from "../huoLongRes/sprint_backlog.jpg";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class ScrumBacklog extends Component {

    render() {
        return (
            <div className="contentleft">
                <h2>Scrum Backlog</h2>
                <img src={sBacklog} className="CustomComponent-Img-Rotate" alt=""/>
            </div>
        );
    }
}

export default ScrumBacklog;