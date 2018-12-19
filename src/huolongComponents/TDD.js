import React, {Component} from 'react';
import tdd from "../huoLongRes/TDD.jpg";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class TDD extends Component {

    render() {
        return (
            <div>
                <div className="contentleft">
                    <h2 className="berlinercontent">Test Driven Development (TDD)</h2>
                    <ul>
                        <li>building and executing tests before coding</li>
                        <li>part of "test-first" approach</li>
                    </ul>

                    <img src={tdd} className="CustomComponent-Img" alt="logo"/><br/>
                    <ol>
                        <li> Write the test first.</li>
                        <li>Run the test and watch it fail.</li>
                        <li> Write just the amount of code needed to pass the test.</li>
                        <li> Continue implementing new code until all tests pass.</li>
                        <li> Refactor.</li>
                    </ol>

                    <h3>Advantages of TDD</h3>
                    <ul>
                        <li> better quality, lower error</li>
                        <li> Improved coding efficiency</li>
                        <li> Early detection and correction</li>
                        <li> Cost optimazation</li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default TDD;