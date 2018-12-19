import React, {Component} from 'react';
import tasks from "../huoLongRes/tasks.jpg";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class Tasks extends Component {

    render() {
        return (
            <div className="contentleft">
                <h2 className="berlinercontent">Communicate Work: Tasks</h2>
                <p><strong>Tasks</strong></p>
                <ul>
                    <li>breaks&nbsp;user stories&nbsp;or PBIs at the sprint planning meeting to a more granular
                        level.
                    </li>
                    <li>the smallest unit to track work.</li>
                    <li>completed by one person on the team.</li>
                    <li>shouldn'ttake more than a day</li>
                </ul>
                <img src={tasks} className="CustomComponent-Img" alt="logo"/>
            </div>
        );
    }
}

export default Tasks;