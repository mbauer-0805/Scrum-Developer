import React, {Component} from 'react';
import review from "../huoLongRes/dailyScrum.jpg";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class Klassenname extends Component {

    render() {
        return (
                <div className="contentleft">
                    <h3>Increment</h3>
                    <p>The Increment is the sum of all the Product Backlog items completed during a Sprint and
                        the<br/>value
                        of the increments of all previous Sprints. At the end of a Sprint, the new Increment
                        must<br/>be &ldquo;Done,&rdquo; which means it must be in useable condition and meet the
                        Scrum
                        Team&rsquo;s definition<br/>of &ldquo;Done.&rdquo; An increment is a body of inspectable,
                        done
                        work that supports empiricism at the<br/>end of the Sprint. The increment is a step toward a
                        vision or goal. The increment must be in<br/>useable condition regardless of whether the
                        Product
                        Owner decides to release it.</p>

                </div>
        );
    }
}

export default Klassenname;