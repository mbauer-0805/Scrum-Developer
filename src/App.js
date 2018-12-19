import React, { Component } from 'react';
import './HuoLong.css';
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
import QualityCodeQualitySoftware from './berlinerComponents/QualityCodeQualitySoftware';
import Solid from './berlinerComponents/Solid.js';
import BDUF from "./huolongComponents/BDUF";
import Bugs from "./huolongComponents/Bugs";
import ContiniousIntegration from "./huolongComponents/ContiniousIntegration";
import EmergentArchitecture from "./huolongComponents/EmergentArchitecture";
import FIRST from "./huolongComponents/FIRST";
import IdealDay from "./huolongComponents/IdealDay";
import Manifesto6 from "./huolongComponents/Manifesto6";
import Increment from "./huolongComponents/Increment";
import ReviewMeeting from "./huolongComponents/ReviewMeeting";
import ScrumBacklog from "./huolongComponents/ScrumBacklog";
import ScrumMaster from "./huolongComponents/ScrumMaster";
import ScrumTeam from "./huolongComponents/ScrumTeam";
import SprintPlanning from "./huolongComponents/SprintPlanning";
import SprintReview from "./huolongComponents/SprintReview";
import Tasks from "./huolongComponents/Tasks";
import TDD from "./huolongComponents/TDD";
import UnitTestBestPractices from "./huolongComponents/UnitTestBestPractices";
import UnitTests from "./huolongComponents/UnitTests";
import UserStories from "./huolongComponents/UserStories";
import CommitStandards from "./berlinerComponents/CommitStandards"
import Quality from "./huolongComponents/Quality"
import TechnicalDebt from "./huolongComponents/TechnicalDebt"


import 'react-accessible-accordion/dist/fancy-example.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';



class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <img src={berlingrafik} className="Team" alt="logo" />
                        <img src={logo} className="Team" alt="logo" />
                    </header>
                    <Accordion>
                        <h2>Scrum</h2>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Scrum Team</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <ScrumTeam />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Development Team</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <DevelopmentTeam />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Product Owner</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <ProductOwner />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Scrum Master</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <ScrumMaster />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Product Backlog</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <ProductBacklog />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Increment</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <Increment />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Review Meeting</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <ReviewMeeting />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Retrospecive Meeting</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <SprintRetro />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Sprint</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <TheSprint />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Sprint Planning</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <SprintPlanning />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Sprint Review</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <SprintReview />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Scrum Backlog</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <ScrumBacklog />
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>

                    <Accordion>
                        <h2>Product Backlog</h2>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>PBI</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <ProductBacklogItems />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Ideal Day</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <IdealDay />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>User Stories</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <UserStories />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Story Points</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <StoryPoints />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Definition of Done</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <DefinitionOfDone />
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>

                    <Accordion>
                        <h2>Emergent Architecture</h2>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Emerging Architecture</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <EmergentArchitecture />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Architecture has no value</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <ArchitectureNoValue />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Fit for Purpose</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <FitForPurpose />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>BDUF</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <BDUF />
                            </AccordionItemBody>
                        </AccordionItem>

                    </Accordion>


                    <Accordion>
                        <h2>Agile Manifest</h2>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Agile Manifest Principles</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <Manifesto6 />
                                <Manifest />
                            </AccordionItemBody>
                        </AccordionItem>

                    </Accordion>

                    <Accordion>
                        <h2>Application Lifecycle Management</h2>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Communicate Work: Plan & Track</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <CommunicateWork />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Assess Progress</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <AssessTransparency />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>SVC: File Handling</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <VersionControlPractices />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Branching Strategy</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <AgileBranching />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Communicate Work: Tasks</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <Tasks />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Continious Integration</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <ContiniousIntegration />
                            </AccordionItemBody>
                        </AccordionItem>

                    </Accordion>

                    <Accordion>
                        <h2>Testing</h2>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Unit Test FIRST</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <FIRST />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Bugs and Reporting a Bug</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <Bugs />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Unit Tests</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <UnitTests />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Unit Tests: Best Practices</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <UnitTestBestPractices />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Code Coverage</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <CodeCoverage />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>ATDD</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <ATDD />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>TDD</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <TDD />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Type of Tests</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <TypesOfTests />
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Development Tests and Practices</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <TestPractices />
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>

                    <Accordion>
                    <AccordionItem>
                            <AccordionItemTitle>
                                <h3>SOLID</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <Solid />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Quality</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <Quality />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Technical Debt</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <TechnicalDebt />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Quality Code = Quality Software</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <QualityCodeQualitySoftware />
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Commit Standards</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <CommitStandards />
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>


                </div>

            </div>

        );

    }
}

export default App;
