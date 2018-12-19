//Dont't Delete
import React, { Component } from 'react';
import jenkins from "../huoLongRes/Jenkins.png";

//Designguide:
//img classe Cutom-Component-Img
//div klasse contentLeft

class BuildAutomation extends Component {

    render() {
        return (

            <div className="contentleft">
            <h2 className="berlinercontent">Build Automation</h2>
                <ul>
                    <li>
                        <p>process that converts&nbsp;files and other assets under the developers' responsibility into a software product in its final or consumable form:</p>
                        <ul>
                            <li>compiling source files</li>
                            <li>packaging compiled&nbsp;files into compressed formats (such as jar, zip)</li>
                            <li>producing installers</li>
                            <li></li>
                        </ul>
                    </li>
                    <li>automated build
<ul>
                            <li>steps are repeatable</li>
                            <li>require no direct human intervention</li>
                            <li>performable at any time with only repository information</li>
                        </ul>
                    </li>
                    <li>prerequisition for effective use of continous integration</li>
                    <li>the benefits&nbsp;
<ul>
                            <li>eliminating a source of variation, and thus of defects</li>
                            <li>less mistakes</li>
                            <li>less time</li>
                        </ul>
                    </li>
                </ul>
                <img src={jenkins} className="CustomComponent-Img" alt="logo" /><br />

            </div>
        );
    }
}

export default BuildAutomation;