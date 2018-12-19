import React, {Component} from 'react';
import jUnit from "../huoLongRes/jUnitTest.PNG";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class UnitTestBestPractices extends Component {

    render() {
        return (
            <div>
                <div className="contentleft">
                    <h2 className="berlinercontent">Best practices for unit test</h2>

                    <ul>
                        <li>Naming your tests: explicitly express the intent</li>
                        <li>method name</li>
                        <li>scenario</li>
                        <li>expected behavior</li>
                        <li>Arrange your tests</li>
                        <li>Arrange: create, setting up</li>
                        <li>Act&nbsp;</li>
                        <li>Assert: expected behavior?</li>
                        <li>Input used in test should be simplest possible</li>
                        <li>Avoid logic in tests: no if, for, switch...</li>
                        <li>Helper methods to setup and teardown</li>
                        <li>Avoid multiple asserts: create a separate test for each assert</li>
                        <li>Validate private methods by unit testing public methods</li>
                    </ul>
                    <img src={jUnit} className="CustomComponent-Img" alt="logo"/><br/>

                </div>
            </div>
        );
    }
}

export default UnitTestBestPractices;