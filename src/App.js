import React, { Component } from 'react';
import './App.css';
import devteamgrafik from './devTeam.png';
import productownergrafik from './productOwner.png';
import berlingrafik from './berlin.png';
import manifestografik from './manifesto.jpg';
import productBackloggrafik from './productBacklog.jpg';
import definitionofdone from './definitionOfDone.jpg'
import retrospectivegrafik from './SprintRetro.png'
import storypoints from './sprelations.png';
import csgrafik from './cs.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={berlingrafik} className="App-logo" alt="logo" />
          <h1 className="App-title">Team Berliner Schmeh</h1>
        </header>

        <p className="berlinercontent">
          <h2>Development Team</h2>
          <img src={devteamgrafik} width="830" alt="devteam bild" />
        </p>

        <p className="berlinercontent">
          <h2>Product Owner</h2>
          <img src={productownergrafik} alt="productowner bild" />
        </p>

        <p className="berlinercontent">
          <h2>Manifest 7 - 12</h2>
          <img src={manifestografik} alt="manifesto bild" />

        </p>

        <p className="berlinercontent">
          <h2>Artifact: Product-Backlog</h2>
          <img src={productBackloggrafik} alt="productbacklog bild" />
        </p>

        <div className="contentleft">
          <h2 className="berlinercontent">Product Backlog</h2>
          <ul>
            <li>Single source of requirements for any changes to be made to the product</li>
            <li>The Product Owner is responsible including its content, availability, and ordering</li>
            <li>is never complete, it is dynamic -> living artifact</li>
            <li>earliest development of it: initially known and best-understood requirements</li>
            <li>If a product exists, its Product Backlog also exists</li>
            <li>lists all features, functions, requirements, enhancements, and fixes that constitute the changes to be made to the product in future releases</li>
            <li>Product Backlog items have the attributes: description, order, estimate, and value. Product Backlog items often include test descriptions that will prove its completeness when "Done"</li>
            <li>Product Backlog refinement: act of adding detail, estimates, and order to items in the Product Backlog (ongoing process in which the Product Owner and the Development Team collaborate on the details of Product Backlog items)</li>
            <li>Refinement usually consumes no more than 10% of the capacity of the Development Team</li>
            <li>Product Backlog items can be updated at any time by the Product Owner or at the Product Owner’s discretion</li>
            <li>Higher ordered Product Backlog items are usually clearer and more detailed than lower ordered ones</li>
            <li>Product Backlog items that can be "Done" by the Development Team within one Sprint are deemed "Ready" for selection in a Sprint Planning</li>
          </ul>
        </div>

        <p className="contentleft">
          <h2 className="berlinercontent">Definition of done</h2>
          The team agrees on, and displays prominently somewhere in the team room, a list of criteria which must be met before a product increment "often a user story" is considered "done". Failure to meet these criteria at the end of a sprint normally implies that the work should not be counted toward that sprint's velocity.
        </p>
        <p className="berlinercontent">
          <img src={definitionofdone} alt="definition of done" />
        </p>

        <p className="berlinercontent">
          <h2>Sprint Retrospective</h2>
          <img width="800px" src={retrospectivegrafik} alt="retrospective bild" />

        </p>

        <div className="contentleft">
          <h2 className="berlinercontent">Sprint Retrospective</h2>
          <p>The Sprint Retrospective occurs after the Sprint Review and prior to the next Sprint Planning. This is at most a three-hour meeting for one-month Sprints. For shorter Sprints, the event is usually shorter.
During the Sprint Retrospective, the team discusses:</p>
          <ul>
            <li>What went well in the Sprint</li>
            <li>What could be improved</li>
            <li>What will we commit to improve in the next Sprint</li>
          </ul>
        </div>


        <p className="berlinercontent">
          <h2>The Sprint</h2>
        </p>

        <div className="contentleft">
          <p>
            As described in the Scrum Guide, a Sprint, a time-box of one month or less during which a “Done”, useable, and Scrum Sprint is part of the Empirical Processpotentially releasable product Increment is created. Sprints have consistent durations throughout a development effort. A new Sprint starts immediately after the conclusion of the previous Sprint.
      </p>
          <p>
            <ul>
              <li>No changes are made that would endanger the Sprint Goal</li>
              <li>Quality goals do not decrease</li>
              <li>Scope may be clarified and re-negotiated between the Product Owner and Development Team as more is learned.</li>
            </ul>
          </p>
          <p>
            Each Sprint may be considered a project with no more than a one-month horizon. Like projects, Sprints are used to accomplish something. Each Sprint has a goal of what is to be built, a design and flexible plan that will guide building it, the work, and the resultant product increment.
      </p>
        </div>

        <p className="berlinercontent">
    <h2>Product Backlog Items and 3Cs</h2>
    <img src={csgrafik} alt="three cs bild" />

  </p>

        <p className="berlinercontent">
          <h2>Story Points</h2>
          <img src={storypoints} width="800px" alt="productbacklog bild"></img>
        </p>

        <div className="contentleft">

          <ul>
            <li> Scrum says: Estimates should be provided by people that will be doing the work but not <b>how</b> we should provide estimates.</li>
            <li> Common tactic: Estimate using a unit of measurement referred to as the <b>Story Point.</b> </li>
            <li> Instead of estimating in hours, teams consider only how much effort a product backlog item will require, relative to other product backlog items.</li>
            <li> Why can’t we use hours or days? Well, in a nutshell, because your hour is not the same as my hour.</li>
            <li >If you ask two developers to estimate the same task, you’ll get two different answers. While some of the difference might be explained by gaps in the specification or understanding, the fact is that developers have different knowledge and experiences so it will take more or less time to do the same work.</li>
            <li> Ask those same two developers to rate the amount of effort required to complete one product backlog item relative to another product backlog item and you’re far more likely to end up with a consensus.</li>
          </ul>
        </div>
      </div>


    );

  }
}

export default App;
