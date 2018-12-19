import React, {Component} from 'react';
import bug1 from "../huoLongRes/Bug1.png";
import bug2 from "../huoLongRes/bug2.jpg";
import bugreport from "../huoLongRes/bug-report.jpg";
import poor_bug_report from "../huoLongRes/poor-bug-report.jpg";
import high_quality_bug_report from "../huoLongRes/high-quality-bug-report.jpg";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class Bugs extends Component {

    render() {
        return (
            <div>
                <div className="contentleft">
                    <h2 className="berlinercontent">Bugs</h2>
                    <ul>
                        <li>Bug Report schreiben</li>
                        <li>Bug Backlog</li>
                        <li>Good Code Base</li>
                        <li>Ab&auml;gen ob der Bug kritisch ist</li>
                        <li>Product Owner melden</li>
                        <li>Jedes Team geht mit Bugs anders um</li>
                        <li>Nicht wichtige Bugs vergessen</li>
                        <li>Kritische Bugs sofort behandeln</li>
                    </ul>
                    <img src={bug1} className="CustomComponent-Img" alt="logo"/>
                    <img src={bug2} className="CustomComponent-Img" alt="logo"/>
                </div>
                <div className="contentleft">
                    <h2 className="berlinercontent">Reporting a Bug</h2>

                    <ul>
                        <li>A good bug report contains the information needed to reproduce and fix problems</li>
                        <li>A good bug report is an efficient form of communication for both bug reporter and bug
                            receiver
                        </li>
                        <li>A good bug report is resolved as fast as possible</li>
                        <li>A good bug report is sent to the person in charge</li>
                        <li>A good bug report is on point</li>
                        <li>A good bug report is filed in a defined way</li>
                        <li>A good bug report establishes a common ground for collaboration</li>
                    </ul>
                    <h3 className="berlinercontent">Way of a Bug Report</h3>
                    <img src={bugreport} className="CustomComponent-Img" alt="logo"/>
                    <h3 className="berlinercontent">Poor Bug Report</h3>
                    <img src={poor_bug_report} className="CustomComponent-Img" alt="logo"/><br/>
                    <h3 className="berlinercontent">High Quality Bug Report</h3>
                    <img src={high_quality_bug_report} className="CustomComponent-Img" alt="logo"/><br/>


                </div>
            </div>
        );
    }
}

export default Bugs;