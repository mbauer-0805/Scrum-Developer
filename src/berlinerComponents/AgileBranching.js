import React, { Component } from 'react';
import agileBranchingGrafik from "../berlinerRes/agileBranching.jpg";

class AgileBranching extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>Agile Branching strategy </h2>
                    <h3>branching model for Scrum  oriented towards team collaboration and continuous integration</h3>
                </p>

                <p className="berlinercontent">
                    <img src={agileBranchingGrafik} width="800px" alt="agile Branching bild" />
                </p>


                <div className="contentleft">
                    <p>Master branch:</p>
                    <ul>
                        <li>reflects the level of code approved by the Product Owner as being ready for the production
                         </li>
                    </ul>
                    <p>Sprint branch/ “ready for demo” branch:</p>
                    <ul>
                        <li>aims at containing commits of completed stories   </li>
                        <li>the ones that will be presented to the Product Owner during the sprint review</li>
                        <li>At the beginning of each new sprint, its sprint branch is created from the master branch</li>
                    </ul>
                    <p>Story branch:</p>
                    <ul>
                        <li>As soon as the sprint starts, a dedicated branch for each story will be created from the sprint</li>
                        <li>can be seen as a  reference branch for the development of a specific feature</li>
                        <li>short-lived branch but not to be considered as a "garbage" branch</li>
                        <li>commits that will be pushed to the remote story branch should be relevant, atomic and clean</li>
                    </ul>
                </div>
            </div>

        );

    }
}

export default AgileBranching;
