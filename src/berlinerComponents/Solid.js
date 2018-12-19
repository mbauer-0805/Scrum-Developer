import React, { Component } from 'react';
import solid from "../berlinerRes/solid.png";



class Solid extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>SOLID</h2>
                    <div className="contentleft">
                        <p> SOLID is an acronym that represents five principles very important when we develop with the OOP paradigm, in addition it is an essential knowledge that every developer must know.</p>
                        <p> Understanding and applying these principles will allow you to write better quality code and therefore be a better developer.</p>
                    </div>
                    <img src={solid} alt="solid bild" />

                    <h3>Benefits: </h3>
                    <div className="contentleft">
                        <li >Ease to maintain. </li>
                        <li >Ease to extend.</li>
                        <li >Robust code.</li>
                    </div>
                </p>
            </div>

        );

    }
}

export default Solid;