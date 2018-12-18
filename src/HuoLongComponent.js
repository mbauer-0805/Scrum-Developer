import React, {Component} from 'react';
import team from "./huoLongRes/scrumTeam.jpg";
import manifest from "./huoLongRes/Manifesto 1-6.JPG";
import master from "./huoLongRes/scrumMaster.jpg";
import sBacklog from "./huoLongRes/sprint_backlog.jpg";
import review from "./dailyScrum.jpg";
import reviewMeeting from "./huoLongRes/reviewMeeting.png";
import increment from "./huoLongRes/increment.jpg";

class HuoLongComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CustomComponent">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <div className="CustomComponent-div">
                    <div>
                        <h1>Scrum Team</h1>

                        <img src={team} className="Team" alt="logo"/>

                        <p>&nbsp;</p>
                        <p>self-organizing : not directed by anyone outside&nbsp; the team</p>
                        <p>cross-functional : have all competencies to accomplish the work</p>
                        <p>&nbsp;</p>
                        <p>team model designed to optimize</p>
                        <ul>
                            <li>flexibility</li>
                            <li>creativity</li>
                            <li>productivity</li>
                        </ul>
                        <p>&nbsp;</p>
                        <p>deliver products&nbsp;<strong>iteratively</strong>&nbsp;and&nbsp;<strong>incrementally,
                            maximizing feedback</strong></p>

                    </div>
                    <h1>Scrum Master</h1>
                    <img src={master} className="App-logo" alt="logo"/>

                    <p>&nbsp;</p>

                    <ul>
                        <li>Unterst&uuml;tzt das Team zum Einhalten der im Scrum Guide beschriebenen Richtlinien.</li>
                        <li>Hilft, die Schnittstelle des Scrum-Teams nach au&szlig;en m&ouml;glichst effizient zu
                            gestalten.
                        </li>
                    </ul>
                    <p>&nbsp;</p>
                    <h3>Scrum Master -&gt; Product Owner</h3>
                    <ul>
                        <li>Versucht, das vollkomme Verst&auml;ndnis der Ziele, des Umfangs und der Produktdom&auml;ne
                            im Team zu gew&auml;hrleisten.
                        </li>
                        <li>Vermittelt die Notwendigkeit der Pflege des Product Backlogs.</li>
                        <li>Unters&uuml;tzt bei Anfrage oder Bedarf die Scrum-Events.</li>
                    </ul>
                    <p>&nbsp;</p>
                    <h3>Scrum Master -&gt; Development Team</h3>
                    <ul>
                        <li>Coacht das Team zur besseren Selbstorganisation und zur Cross-Functionality.</li>
                        <li>R&auml;umt impediments f&uuml;r das Team aus dem Weg.</li>
                        <li>Coacht das Team in einer Umgebung, in der Scrum noch nicht komplett adaptiert wurde.</li>
                        <li>Unters&uuml;tzt bei Anfrage oder Bedarf die Scrum-Events.</li>
                    </ul>
                    <p>&nbsp;</p>
                    <h3>Scrum Master -&gt; Organization</h3>
                    <ul>
                        <li>F&uuml;hrung und Coaching der Einf&uuml;hrung von Scrum.</li>
                        <li>Hilft Angestellten und den Stakeholdern Scrum, sowie empirische Produkt (Software)
                            Entwicklung zu verstehen.
                        </li>
                        <li>F&uuml;hrt bei Bedarf Ver&auml;nderungen durch, um die Produktivit&auml;t des Scrum Teams zu
                            verbessern.
                        </li>
                        <li>Arbeitet mit anderen Scrum Mastern zusammen, um die allgemeine Effektivit&auml;t von Scrum
                            in der Organisation zu steigern.
                        </li>
                    </ul>
                    <h2>Manifesto 1-6</h2>
                    <img src={manifest} className="CustomComponent-Img-Rotate" alt=""/>

                    <h2>Scrum Backlog</h2>
                    <img src={sBacklog} className="CustomComponent-Img-Rotate" alt=""/>
                    <h2>Spring Review</h2>
                    <p>When : at the END of the Sprint - &gt;</p>
                    <ul>
                        <ul>
                            <li>inspect the Increment</li>
                            <li>adapt Product Backlog</li>
                        </ul>
                    </ul>

                    <p>Duration : 4h for one month Sprints</p>
                    <p>Who:</p>
                    <ul>
                        <li>Scrum Team</li>
                        <li>stakeholders</li>
                    </ul>
                    <p>During Sprint Review Meeting</p>
                    <ul>
                        <li>Product Owner explains what have been "Done"</li>
                        <li>Dev Team discuss the experience gained in this Sprint</li>
                        <li>Dev Teams demonstrates the work</li>
                        <li>Entire group discusses about what to do next</li>
                        <li>Review the priority based on changes of marketplace or product function</li>
                        <li>Review of the timeline, budget, potential capabilities</li>
                    </ul>
                    <p>Result :&nbsp;</p>
                    <ul>
                        <li>a revised Product Backlog that defines the probable items for next Sprint</li>
                    </ul>
                    <img src={reviewMeeting} alt="logo"/>

                    <h2>Daily Scrum</h2>
                    <ul>
                        <li>F&ouml;rdern die Kommunikation</li>
                        <li>Machen andere Meetings &uuml;berfl&uuml;ssig</li>
                        <li>Identifizieren zu beseitigende Hindernisse</li>
                        <li>Fokussieren und f&ouml;rdern die schnelle Entscheidungsfindung</li>
                        <li>Erh&ouml;hen den Wissensstand des Teams</li>
                        <li>&Uuml;berpr&uuml;fung und Anpassung</li>
                    </ul>
                    <img src={review} alt="logo"/>

                    <h3>Increment</h3>
                    <p>The Increment is the sum of all the Product Backlog items completed during a Sprint and the<br/>value
                        of the increments of all previous Sprints. At the end of a Sprint, the new Increment
                        must<br/>be &ldquo;Done,&rdquo; which means it must be in useable condition and meet the Scrum
                        Team&rsquo;s definition<br/>of &ldquo;Done.&rdquo; An increment is a body of inspectable, done
                        work that supports empiricism at the<br/>end of the Sprint. The increment is a step toward a
                        vision or goal. The increment must be in<br/>useable condition regardless of whether the Product
                        Owner decides to release it.</p>

                    <img src={increment} className="CustomComponent-Img" alt="logo"/>

                </div>
            </div>
        );
    }
}

export default HuoLongComponent;