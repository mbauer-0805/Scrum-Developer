import React, { Component } from 'react';
import test0 from "../berlinerRes/test0.png";
import test1 from "../berlinerRes/test1.png";
import test2 from "../berlinerRes/test2.png";
import test3 from "../berlinerRes/test3.png";

class TypesOfTests extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>Types of Tests</h2>

                    <p><img src={test0} width="400px" alt="test0 bild"></img>  </p>
                    <p><img src={test1} width="400px" alt="test1 bild"></img> </p>
                    <p><img src={test2} width="400px" alt="test2 bild"></img></p>
                    <p><img src={test3} width="400px" alt="test3 bild"></img></p>
                </p>
            </div>

        );

    }
}

export default TypesOfTests;
