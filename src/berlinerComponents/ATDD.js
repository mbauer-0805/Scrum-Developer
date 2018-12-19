import React, { Component } from 'react';
import atddgrafik from '../berlinerRes/atdd.jpg';
class ATDD extends Component {
    render() {
        return (
            <div>
                <div className="contentleft">
                    <h1>ATDD - Acceptance Test-Driven Development</h1>
                    <h2>Does the system do what it is required to do?</h2>
                    <ul>
                        <li>may also be referred to as Story Test Driven Development (SDD), Specification by Example or Behavior Driven Development (BDD)</li>
                        <li>a collaborative practice where users, testers, and developers define automated acceptance criteria</li>
                        <li>helps to ensure that all project members understand precisely what needs to be done and implemented</li>
                        <li>Failing tests provide quick feedback that the requirements are not being met</li>
                        <li>The tests are specified in business domain terms. Each feature must deliver real and measurable business value: indeed, if your feature doesn’t trace back to at least one business goal</li>
                        <li>writing acceptance tests in advance of implementing the corresponding functionality</li>
                        <li>acceptance tests represent the user's point of view</li>
                        <p></p>
                        <li>The collaborative discussions to generate the acceptance test is often referred to as the three amigos -> representing the three perspectives of customer, development team, testing</li>
                    </ul>
                </div>
                <p className="berlinercontent">
                    <img src={atddgrafik} width="300px" alt="atdd bild" />
                </p>
                <div className="contentleft">
                    <ui>
                        <li>what problem are we trying to solve? (customer)</li>
                        <li>development (how might we solve this problem?)</li>
                        <li>and testing (what about...)</li>
                        <p></p>
                        <li>Even more than the use of automated acceptance tests, this practice is strongly associated with the use of specific tools such as Fit/FitNess, Cucumber or others</li>
                    </ui>
                </div>
            </div>

        );

    }
}

export default ATDD;
