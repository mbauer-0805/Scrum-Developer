import React, { Component } from 'react';
import qualityMetrics from "../huoLongRes/quality.png";


class Quality extends Component {

    render() {
        return (
            <div className="contentleft">
                <h2 className="berlinercontent">Quality Metrics</h2>
                <ul>
                    <li>
                        <div>Extensible -&gt; future growth</div>
                    </li>
                    <li>
                        <div>Maintainable -&gt; how easy to make changes</div>
                    </li>
                    <li>
                        <div>Readability -&gt;good formatted and consistent, meaningful names</div>
                    </li>
                    <li>
                        <div>Clarity -&gt; unambiguous, easy to understand</div>
                    </li>
                    <li>
                        <div>Well-documented</div>
                    </li>
                    <li>
                        <div>Well-tested</div>
                    </li>
                    <li>
                        <div>Efficiency -&gt; no unnecessary resoures</div>
                    </li>
                </ul>
                <img src={qualityMetrics} className="CustomComponent-Img" alt="logo" /><br />
            </div>
        );
    }
}

export default Quality;