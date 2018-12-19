import React, { Component } from 'react';


class ArchitectureNoValue extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>Software Architecture in Scrum</h2>
                </p>
                <div className="contentleft">
                    <p>When we talk about software architecture, we are talking about making decisions. </p>
                    <p>Scrum mandates having a piece of working software at the end of the Sprint, which integrates with previously (if any) integrated pieces of working software (this is called an Increment) and that is built according to a Definition of Done.</p>
                    <p>Therefore, all design decisions that are made throughout the Sprint make software architecture emerge and are embodied in the piece of working software. </p>
                    <p>There is no special moment for the design of the software architecture in Scrum. There is no "software architecture Sprint.". Making only design decisions during this type of a sprint would result in no value. Architecture in Scrum emerges, it is not created somewhere, or at some specific time. </p>
                </div>
            </div>

        );

    }
}

export default ArchitectureNoValue;
