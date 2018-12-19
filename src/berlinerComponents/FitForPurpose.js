import React, { Component } from 'react';
import Pizza from "../berlinerRes/pizzad.png";

class FitForPurpose extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>Fit For Purpose</h2>
                    <img src={Pizza} width="300px" alt="pizza bild"></img>
                </p>

                <div className="contentleft">
                    <p>Fitness criteria are metrics that measure things customers value when selecting a service again & again</p>


                    <li>Quality</li>
                    <li>Predictability</li>
                    <li>Safety (or conformance to regulatory requirements)</li>

                    <li>Delivery time = approximately 1 hour </li>
                    <li>Non-functional quality = tasty and hot </li>
                    <li> Functional quality (order accuracy) = doesn’t matter if small mistakes are made, geeks will eat any flavor of pizza</li>
                    <li>Predictability = +/- 30 minutes is acceptable </li>
                    <li> Safety = so long as health and safety in food  preparation is good, it’s fine</li>

                    <h3 >Lesson:</h3>
                    <li> We need to offer a selection of different recipes which are tasty and popular. However, we must also deliver with speed & predictability</li>

                    <p>Different segments of customers want different things. If you are trying to be the best, you need to consider which segments you are targeting. It’s unlikely you are going to please everybody all of the time. In other words, you are going to need to focus on a SOME of the possible market. Considering this helps you find your niche markets. You then need to ask yourself questions about their values, such as:</p>
                    <li> What will make them choose my product? What will turn them off?</li>
                    <li>What will make them become a repeat customer? What will scare them away forever? </li>
                    <li> What will cause them to recommend me to others? What will make them tell everyone to stay away?</li>


                    It relates strongly to the first agile Principle
<li>Our highest priority is to satisfy the customer through early and continuous delivery.</li>

                </div>
            </div>

        );

    }
}

export default FitForPurpose;
