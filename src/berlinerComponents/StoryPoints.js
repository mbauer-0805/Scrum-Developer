import React, {Component} from 'react';
import storypoints from "../berlinerRes/Estimating.jpg";


class StoryPoints extends Component {
    render() {
        return (
            <div>
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
            </div>

        );

    }
}

export default StoryPoints;
