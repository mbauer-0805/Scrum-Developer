import React, {Component} from 'react';
import team from "../huoLongRes/scrumTeam.jpg";


class ScrumTeam extends Component {

    render() {
        return (
            <div className="contentleft">
                <h1 className="berlinercontent">Scrum Team</h1>

                <img src={team} className="CustomComponent-Img" alt="logo"/>
                <div className="contentleft">
                    <p>&nbsp;</p>
                    <p>self-organizing : not directed by anyone outside&nbsp; the team</p>
                    <p>cross-functional : have all competencies to accomplish the work</p>
                    <p>&nbsp;</p>
                    <p>team model designed to optimize</p>
                    <ul>
                        <li>flexibility</li>
                        <li>creativity</li>
                        <li>productivity</li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>deliver products&nbsp;<strong>iteratively</strong>&nbsp;and&nbsp;<strong>incrementally,
                        maximizing feedback</strong></p>
                </div>

            </div>
        );
    }
}

export default ScrumTeam;