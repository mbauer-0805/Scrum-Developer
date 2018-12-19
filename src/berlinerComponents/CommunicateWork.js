import React, { Component } from 'react';
import burndown from '../berlinerRes/burdown.png';

class CommunicateWork extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>Communicate work: plan and track</h2>
                </p>

                <div className="contentleft">
                    <ul>
                        <li>The Daily Scrum is an opportunity for the Development Team to check in, assess progress towards achieving the Sprint Goal</li>
                        <li>The sprint backlog, if updated every day, always gives an up-to-date status for your project stakeholders. You can also show them the product backlog so that they know which features the scrum team has completed to date, which features are part of future sprints, and the priority of the features.</li>
                        <li>The burndown chart quickly shows, rather than tells, status. When you look at a sprint burndown chart, you can instantly see if the sprint is going well, or if it might be in trouble.</li>
                        <div className="berlinercontent">
                            <img src={burndown} alt="definition of done" />

                        </div>

                        <li>A task board is a great way to quickly show your project team the status of a sprint, release, or even of the entire project. Task boards have sticky notes with user story titles in at least four columns: To Do, In Progress, Accept, and Done. </li>

                    </ul>
                </div>
            </div>

        );

    }
}

export default CommunicateWork;
