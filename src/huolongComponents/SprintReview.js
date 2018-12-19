import React, {Component} from 'react';
import reviewMeeting from "../huoLongRes/reviewMeeting.png";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class SprintReview extends Component {

    render() {
        return (
            <div>
                <h2>Sprint Review</h2>
                <div className="contentleft">
                    <p>When : at the END of the Sprint - &gt;</p>
                    <ul>
                        <li>inspect the Increment</li>
                        <li>adapt Product Backlog</li>
                    </ul>
                    <p>Duration : 4h for one month Sprints</p>
                    <p>Who:</p>
                    <ul>
                        <li>Scrum Team</li>
                        <li>stakeholders</li>
                    </ul>
                    <p>During Sprint Review Meeting</p>
                    <ul>
                        <li>Product Owner explains what have been "Done"</li>
                        <li>Dev Team discuss the experience gained in this Sprint</li>
                        <li>Dev Teams demonstrates the work</li>
                        <li>Entire group discusses about what to do next</li>
                        <li>Review the priority based on changes of marketplace or product function</li>
                        <li>Review of the timeline, budget, potential capabilities</li>
                    </ul>
                    <p>Result :&nbsp;</p>
                    <ul>
                        <li>a revised Product Backlog that defines the probable items for next Sprint</li>
                    </ul>
                </div>
                <img className="CustomComponent-Img" src={reviewMeeting} alt="logo"/>

            </div>
        );
    }
}

export default SprintReview;