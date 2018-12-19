import React, {Component} from 'react';
import meme from "../huoLongRes/meme.png";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class FIRST extends Component {

    render() {
        return (
            <div>
                <div className="contentleft">
                    <h2 className="berlinercontent">F.I.R.S.T</h2>
                    <ul>
                        <li><strong>Fast</strong>. It is not uncommon for mature projects to have thousands of unit
                            tests. Unit tests should take very little time to run. Milliseconds.
                        </li>
                        <li className=""><strong>Isolated</strong>. Unit tests are standalone, can be run in isolation,
                            and have no dependencies on any outside factors such as a file system or database.
                        </li>
                        <li><strong>Repeatable</strong>. Running a unit test should be consistent with its results, that
                            is, it always returns the same result if you do not change anything in between runs.
                        </li>
                        <li><strong>Self-Checking</strong>. The test should be able to automatically detect if it passed
                            or failed without any human interaction.
                        </li>
                        <li className=""><strong>Timely</strong>. A unit test should not take a disproportionally long
                            time to write compared to the code being tested. If you find testing the code taking a large
                            amount of time compared to writing the code, consider a design that is more testable.
                        </li>
                    </ul>
                    <img src={meme} className="CustomComponent-Img" alt="logo"/><br/>

                </div>

            </div>
        );
    }
}

export default FIRST;