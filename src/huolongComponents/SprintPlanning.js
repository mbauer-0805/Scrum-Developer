import React, {Component} from 'react';
import sprintPlanning from "../huoLongRes/sprint_planning.jpg";
import branchMerch1 from "../huoLongRes/branchMergeWhole.png";
import branchMerch2 from "../huoLongRes/branchMerchWhole2.PNG";
import branchMerch3 from "../huoLongRes/branchMerchWhole3.PNG";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class Klassenname extends Component {

    render() {
        return (
            <div>
                <h2>Sprint Planning</h2>
                <img src={sprintPlanning} className="CustomComponent-Img" alt="logo"/>
                <div className="contentleft">
                    <p>Who?</p>
                    <ul>
                        <li>Scrum Master: make sure the event takes place</li>
                        <li>Product Owner: clarifies the details of the candidate product backlog items</li>
                        <li>The team members: discuss the detail, ask questions, choose items for sprint backlog
                        </li>
                    </ul>
                    <p>When&nbsp;</p>
                    <ul>
                        <li>on 1st day of the Sprint</li>
                        <li>8 hours time-boxed for one month Sprint</li>
                    </ul>
                    <p>Answer 2 main questions:</p>
                    <ul>
                        <li>What can be delivered in the Increment of the upcoming&nbsp;sprint?</li>
                        <li>How to achieve it?</li>
                    </ul>
                    <p>Results</p>
                    <ul>
                        <li><strong>A Sprint goal</strong>: one-or two-sentence, describes what the team plans to do
                            achieve during the Sprint.
                        </li>
                        <li><strong>A Sprint backlog</strong></li>
                    </ul>

                    <h2>Branching vs. Merging</h2>
                    <img src={branchMerch1} className="CustomComponent-Img" alt="logo"/><br/>
                    <img src={branchMerch2} className="CustomComponent-Img" alt="logo"/><br/>
                    <img src={branchMerch3} className="CustomComponent-Img" alt="logo"/><br/>
                </div>
            </div>
        );
    }
}

export default Klassenname;