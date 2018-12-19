import React, { Component } from 'react';
import retrospectivegrafik from "../berlinerRes/SprintRetro.png";


class SprintRetro extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>Sprint Retrospective</h2>
                    <img width="800px" src={retrospectivegrafik} alt="retrospective bild" />

                </p>

                <div className="contentleft">
                    <h2 className="berlinercontent">Sprint Retrospective</h2>
                    <p>The Sprint Retrospective occurs after the Sprint Review and prior to the next Sprint Planning.
                        This is at most a three-hour meeting for one-month Sprints. For shorter Sprints, the event is
                        usually shorter.
                        During the Sprint Retrospective, the team discusses:</p>
                    <ul>
                        <li>What went well in the Sprint</li>
                        <li>What could be improved</li>
                        <li>What will we commit to improve in the next Sprint</li>
                    </ul>
                </div>


            </div>

        );

    }
}

export default SprintRetro;