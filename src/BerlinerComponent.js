import React, { Component } from 'react';
import berlingrafik from "./berlinerRes/berlin.png";
import logo from "./huoLongRes/huoLong.png";
import DevelopmentTeam from "./berlinerComponents/DevelopmentTeam.js";
import ProductOwner from "./berlinerComponents/ProductOwner.js";
import Manifest from "./berlinerComponents/Manifest.js";
import ProductBacklog from "./berlinerComponents/ProductBacklog.js";
import DefinitionOfDone from "./berlinerComponents/DefinitionOfDone.js";
import SprintRetro from "./berlinerComponents/SprintRetro.js";
import TheSprint from "./berlinerComponents/TheSprint.js";
import ProductBacklogItems from "./berlinerComponents/ProductBacklogItems.js";
import VersionControlPractices from "./berlinerComponents/VersionControlPractices.js";
import StoryPoints from "./berlinerComponents/StoryPoints.js";
import AssessTransparency from "./berlinerComponents/AssessTransparency.js";
import FitForPurpose from "./berlinerComponents/FitForPurpose.js";
import CommunicateWork from "./berlinerComponents/CommunicateWork.js";
import AgileBranching from "./berlinerComponents/AgileBranching.js";
import ArchitectureNoValue from "./berlinerComponents/ArchitectureNoValue.js";
import TypesOfTests from './berlinerComponents/TypesOfTests';
import CodeCoverage from './berlinerComponents/CodeCoverage';
import TestPractices from './berlinerComponents/TestPractices';
import ATDD from './berlinerComponents/ATDD';




class BerlinerComponent extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={berlingrafik} className="Team" alt="logo" />
                    <img src={logo} className="Team" alt="logo" />
                </header>

                <DevelopmentTeam />
                <ProductOwner />
                <Manifest />
                <ProductBacklog />
                <DefinitionOfDone />
                <SprintRetro />
                <TheSprint />
                <ProductBacklogItems />
                <StoryPoints />
                <VersionControlPractices />
                <AssessTransparency />
                <FitForPurpose />
                <CommunicateWork />
                <AgileBranching />
                <ArchitectureNoValue />
                <TypesOfTests />
                <CodeCoverage />
                <TestPractices />
                <ATDD />
            </div>



        );
    }
}

export default BerlinerComponent;