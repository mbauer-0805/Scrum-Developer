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


import storypoints from "./berlinerRes/Estimating.jpg";

import coverage from "./berlinerRes/coverage.png";
import agileBranchingGrafik from "./berlinerRes/agileBranching.jpg";
import burndown from './berlinerRes/burdown.png';
import atddgrafik from './berlinerRes/atdd.jpg';

import Transboard from "./berlinerRes/Transboard.jpg";
import Transparency from "./berlinerRes/Transparency.jpg";
import Pizza from "./berlinerRes/pizzad.png";
import test0 from "./berlinerRes/test0.png";
import test1 from "./berlinerRes/test1.png";
import test2 from "./berlinerRes/test2.png";
import test3 from "./berlinerRes/test3.png";

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



                <p className="berlinercontent">
                    <h2>Story Points</h2>
                    <img src={storypoints} width="800px" alt="productbacklog bild"></img>
                </p>

                <div className="contentleft">

                    <ul>
                        <li> Scrum says: Estimates should be provided by people that will be doing the work but
                            not <b>how</b> we should provide estimates.
                        </li>
                        <li> Common tactic: Estimate using a unit of measurement referred to as the <b>Story Point.</b>
                        </li>
                        <li> Instead of estimating in hours, teams consider only how much effort a product backlog item
                            will require, relative to other product backlog items.
                        </li>
                        <li> Why can’t we use hours or days? Well, in a nutshell, because your hour is not the same as
                            my hour.
                        </li>
                        <li>If you ask two developers to estimate the same task, you’ll get two different answers. While
                            some of the difference might be explained by gaps in the specification or understanding, the
                            fact is that developers have different knowledge and experiences so it will take more or
                            less time to do the same work.
                        </li>
                        <li> Ask those same two developers to rate the amount of effort required to complete one product
                            backlog item relative to another product backlog item and you’re far more likely to end up
                            with a consensus.
                        </li>
                    </ul>
                </div>

                <p className="berlinercontent">
                    <h2>Version Control best practices</h2>
                </p>
                <div className="contentleft">
                    <ul>
                        <li>Use a descriptive commit message</li>
                        <p>Users can search through the commit messages</p>
                        <li>Make each commit a logical unit </li>
                        <p>Each commit should have a single purpose and should completely implement that purpose. </p>
                        This makes it easier to locate the changes related to some particular feature or bug fix
                        <p><code>git add file1 file2</code></p>
                        <p><code>git commit -m "message"</code></p>
                        <p><code>git commit file1 file2 //commits the two named files.</code></p>
                        <p>If a single file contains changes that serve multiple purposes, you may need to save your all your edits, then re-introduce them in logical chunks, committing as you go.
                        Git contains more sophisticated ways to do this, such as staging some but not all of the changes in a given file to the index
                        </p>

                        <li>Incorporate others' changes frequently</li>
                        <p>Work with the most up-to-date version of the files as possible. </p>
                        <li>Share your changes frequently</li>
                        <p>Once you have committed the changes for a complete, logical unit of work, you should share those changes with your colleagues as soon as possible (by doing git push or hg push).</p>
                        <li>Coordinate with your co-workers</li>
                        <p>The version control system can often merge changes that different people made simultaneously. However, when two people edit the same line, then this is a conflict that a person must manually resolve. </p>
                        <li>Don't commit generated files</li>
                        <p>Version control is intended for files that people edit.</p>
                    </ul>

                </div>
                <p className="berlinercontent">
                    <h2>How to assess progress for transparency</h2>
                    <div className="contentleft">

                        <ul>
                            <p>The most important element to Scrum and Agile is the enthusiasm for communication, openness and transparency.
                            All these panels, messages, posters and rules are essential for teams. How many of us have kept these rules in mind, but we did not have them written down? This is a great example of transparency that requires our teams to question themselves if we are all on the same page.
                    </p>
                            <img src={Transboard} width="800px" alt="transboard bild"></img>
                            <img src={Transparency} width="800px" alt="transparency bild"></img>

                        </ul>
                    </div>
                </p>
                <div className="contentleft">

                    <ul>
                        <li>Transparency is something we must internalize in our teams.</li>
                        <li>It will always generate confidence and will help to understand why certain things happen, some things work and other things not.</li>
                        <li>Trying to hide mistakes will not make us any better.</li>
                    </ul>
                </div>

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

                <p className="berlinercontent">
                    <h2>Communicate work: plan and track</h2>
                </p>

                <div className="contentleft">
                    <ul>
                        <li>The Daily Scrum is an opportunity for the Development Team to check in, assess progress towards achieving the Sprint Goal</li>
                        <li>The sprint backlog, if updated every day, always gives an up-to-date status for your project stakeholders. You can also show them the product backlog so that they know which features the scrum team has completed to date, which features are part of future sprints, and the priority of the features.</li>
                        <li>The burndown chart quickly shows, rather than tells, status. When you look at a sprint burndown chart, you can instantly see if the sprint is going well, or if it might be in trouble.</li>
                        <div className="berlinercontent">
                            <img src={burndown} alt="definition of done" />

                        </div>

                        <li>A task board is a great way to quickly show your project team the status of a sprint, release, or even of the entire project. Task boards have sticky notes with user story titles in at least four columns: To Do, In Progress, Accept, and Done. </li>

                    </ul>



                </div>

                <p className="berlinercontent">
                    <h2>Agile Branching strategy </h2>
                    <h3>branching model for Scrum  oriented towards team collaboration and continuous integration</h3>
                </p>

                <p className="berlinercontent">
                    <img src={agileBranchingGrafik} width="800px" alt="agile Branching bild" />
                </p>


                <div className="contentleft">
                    <p>Master branch:</p>
                    <ul>
                        <li>reflects the level of code approved by the Product Owner as being ready for the production
                         </li>
                    </ul>
                    <p>Sprint branch/ “ready for demo” branch:</p>
                    <ul>
                        <li>aims at containing commits of completed stories   </li>
                        <li>the ones that will be presented to the Product Owner during the sprint review</li>
                        <li>At the beginning of each new sprint, its sprint branch is created from the master branch</li>
                    </ul>
                    <p>Story branch:</p>
                    <ul>
                        <li>As soon as the sprint starts, a dedicated branch for each story will be created from the sprint</li>
                        <li>can be seen as a  reference branch for the development of a specific feature</li>
                        <li>short-lived branch but not to be considered as a "garbage" branch</li>
                        <li>commits that will be pushed to the remote story branch should be relevant, atomic and clean</li>
                    </ul>
                </div>
                <p className="berlinercontent">
                    <h2>Software Architecture in Scrum</h2>
                </p>
                <div className="contentleft">
                    <p>When we talk about software architecture, we are talking about making decisions. </p>
                    <p>Scrum mandates having a piece of working software at the end of the Sprint, which integrates with previously (if any) integrated pieces of working software (this is called an Increment) and that is built according to a Definition of Done.</p>
                    <p>Therefore, all design decisions that are made throughout the Sprint make software architecture emerge and are embodied in the piece of working software. </p>
                    <p>There is no special moment for the design of the software architecture in Scrum. There is no "software architecture Sprint.". Making only design decisions during this type of a sprint would result in no value. Architecture in Scrum emerges, it is not created somewhere, or at some specific time. </p>
                </div>

                <p className="berlinercontent">
                    <h2>Types of Tests</h2>

                    <p> <img src={test0} width="400px" alt="test0 bild"></img>  </p>
                    <p><img src={test1} width="400px" alt="test1 bild"></img> </p>
                    <p> <img src={test2} width="400px" alt="test2 bild"></img></p>
                    <p> <img src={test3} width="400px" alt="test3 bild"></img></p>
                </p>

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


                <div className="contentleft">
                    <h1>ATDD - Acceptance Test-Driven Development</h1>
                    <h2>Does the system do what it is required to do?</h2>
                    <ul>
                        <li>may also be referred to as Story Test Driven Development (SDD), Specification by Example or Behavior Driven Development (BDD)</li>
                        <li>a collaborative practice where users, testers, and developers define automated acceptance criteria</li>
                        <li>helps to ensure that all project members understand precisely what needs to be done and implemented</li>
                        <li>Failing tests provide quick feedback that the requirements are not being met</li>
                        <li>The tests are specified in business domain terms. Each feature must deliver real and measurable business value: indeed, if your feature doesn’t trace back to at least one business goal</li>
                        <li>writing acceptance tests in advance of implementing the corresponding functionality</li>
                        <li>acceptance tests represent the user's point of view</li>
                        <p></p>
                        <li>The collaborative discussions to generate the acceptance test is often referred to as the three amigos -> representing the three perspectives of customer, development team, testing</li>
                    </ul>
                </div>
                <p className="berlinercontent">
                    <img src={atddgrafik} width="300px" alt="atdd bild" />
                </p>
                <div className="contentleft">
                    <ui>
                        <li>what problem are we trying to solve? (customer)</li>
                        <li>development (how might we solve this problem?)</li>
                        <li>and testing (what about...)</li>
                        <p></p>
                        <li>Even more than the use of automated acceptance tests, this practice is strongly associated with the use of specific tools such as Fit/FitNess, Cucumber or others</li>
                    </ui>
                </div>
            </div>



        );
    }
}

export default BerlinerComponent;