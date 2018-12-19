import React, {Component} from 'react';
import review from "../huoLongRes/dailyScrum.jpg";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class ReviewMeeting extends Component {

    render() {
        return (
            <div>
                <h2>Daily Scrum</h2>
                <div className="contentleft">
                    <ul>
                        <li>F&ouml;rdern die Kommunikation</li>
                        <li>Machen andere Meetings &uuml;berfl&uuml;ssig</li>
                        <li>Identifizieren zu beseitigende Hindernisse</li>
                        <li>Fokussieren und f&ouml;rdern die schnelle Entscheidungsfindung</li>
                        <li>Erh&ouml;hen den Wissensstand des Teams</li>
                        <li>&Uuml;berpr&uuml;fung und Anpassung</li>
                    </ul>
                    <img className="CustomComponent-Img" src={review} alt="logo"/>
                </div>

            </div>
        );
    }
}

export default ReviewMeeting;