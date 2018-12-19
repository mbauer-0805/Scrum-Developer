import React, { Component } from 'react';
import coverage from "../berlinerRes/coverage.png";

class CodeCoverage extends Component {
    render() {
        return (
            <div>

                <p className="berlinercontent">
                    <h2>Code Coverage</h2>
                </p>

                <div className="contentleft">
                    <p>This measures the number of lines of source code executed during a given test suite for a program. Tools that measure code coverage normally express this metric as a percentage.</p>
                    <p>
                        Software with high results is less likely to contain undetected bugs stemming from coding errors
                    </p>
                    <p>Levels between 70 and 90 percent suggest reliable software, according to a <a href="https://gupea.ub.gu.se/bitstream/2077/38588/1/gupea_2077_38588_1.pdf">review of academic studies</a> that examined the correlation between software quality and code coverage.</p>
                    <p>Many experts believe that while this metric is valuable, it should not be used as a target for testing or development teams. Targeting a specific percentage or range does not necessarily increase software quality and can lead to problematic testing practices.</p>

                </div>
                <img src={coverage} width="800px" alt="productbacklog bild" />

            </div>

        );

    }
}

export default CodeCoverage;