import React, { Component } from 'react';
import Transboard from "../berlinerRes/Transboard.jpg";
import Transparency from "../berlinerRes/Transparency.jpg";

class AssessTransparency extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>How to assess progress for transparency</h2>
                    <div className="contentleft">

                        <ul>
                            <p>The most important element to Scrum and Agile is the enthusiasm for communication, openness and transparency.
                            All these panels, messages, posters and rules are essential for teams. How many of us have kept these rules in mind, but we did not have them written down? This is a great example of transparency that requires our teams to question themselves if we are all on the same page.
                    </p>
                            <img src={Transboard} width="800px" alt="transboard bild"></img>
                            <img src={Transparency} width="800px" alt="transparency bild"></img>

                        </ul>
                    </div>
                </p>

                <div className="contentleft">
                    <ul>
                        <li>Transparency is something we must internalize in our teams.</li>
                        <li>It will always generate confidence and will help to understand why certain things happen, some things work and other things not.</li>
                        <li>Trying to hide mistakes will not make us any better.</li>
                    </ul>
                </div>
            </div>
        );

    }
}

export default AssessTransparency;
