//Dont't Delete
import React, {Component} from 'react';


//Designguide:
//img classe Cutom-Component-Img
//div klasse contentLeft

class CodingVsDeveloping extends Component {

    render() {
        return (
            <div className="contentleft">
                <h2 className="berlinercontent">Coding vs. Developing</h2>
                <h3>Coding</h3>
                <ul>
                    <li>Programmieren lernen</li>
                    <li>zur Probleml&ouml;sung</li>
                    <li>als Hobby</li>
                </ul>
                <h3>Developing</h3>
                <ul>
                    <li>von Erfassung der Anforderungen bis zum Release
                        <ul>
                            <li>Erfassung der Anforderungen</li>
                            <li>Softwaredesign und Architektur</li>
                            <li>gesamte Projektplanung</li>
                            <li>Coding von Softwaremodulen</li>
                            <li>Testing</li>
                            <li>Release</li>
                        </ul>
                    </li>
                </ul>
                <a target="_blank" href="https://www.youtube.com/watch?v=HluANRwPyNo">Cooles Video</a>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>

            </div>
        );
    }
}

export default CodingVsDeveloping;