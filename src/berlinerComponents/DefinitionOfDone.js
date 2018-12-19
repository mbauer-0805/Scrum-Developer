import React, { Component } from 'react';
import definitionofdone from "../berlinerRes/definitionOfDone.jpg";



class DefinitionOfDone extends Component {
    render() {
        return (
            <div>



                <p className="contentleft">
                    <h2 className="berlinercontent">Definition of done</h2>
                    The team agrees on, and displays prominently somewhere in the team room, a list of criteria which
                    must be met before a product increment "often a user story" is considered "done". Failure to meet
                    these criteria at the end of a sprint normally implies that the work should not be counted toward
                    that sprint's velocity.
                </p>
                <p className="berlinercontent">
                    <img src={definitionofdone} alt="definition of done" />
                </p>


            </div>

        );

    }
}

export default DefinitionOfDone;