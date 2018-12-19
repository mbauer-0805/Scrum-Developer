import React, {Component} from 'react';
import idealDay from "../huoLongRes/idealDay.jpg";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class IdealDay extends Component {

    render() {
        return (
            <div>
                <h2>Ideal Day</h2>
                <div className="contentleft">
                    <ul>
                        <li>one developer</li>
                        <li>in one eight hour day</li>
                        <li>completely free of interruptions such as drop-ins, phone calls, meetings, etc.</li>
                    </ul>
                    <p>NOT the REALITY, calendar days.</p>
                    <p>Estimating using Ideal Day:</p>
                    <ul>
                        <li>each member estimates how many ideal days he need to finish the user story</li>
                    </ul>
                </div>
                <img src={idealDay} className="CustomComponent-Img" alt="logo"/>

            </div>
        );
    }
}

export default IdealDay;