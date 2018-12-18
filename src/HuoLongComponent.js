import React, {Component} from 'react';
import team from "./huoLongRes/scrumTeam.jpg";
import manifest from "./huoLongRes/Manifesto 1-6.JPG";
import master from "./huoLongRes/scrumMaster.jpg";
import sBacklog from "./huoLongRes/sprint_backlog.jpg";
import review from "./huoLongRes/dailyScrum.jpg";
import reviewMeeting from "./huoLongRes/reviewMeeting.png";
import increment from "./huoLongRes/increment.jpg";
import epic from "./huoLongRes/epic.png";
import idealDay from "./huoLongRes/idealDay.jpg";
import storyCard from "./huoLongRes/Story_Card.png";

class HuoLongComponent extends Component {

    render() {
        return (
            <div className="CustomComponent">

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
                    <h2>User Stories</h2>
                    <ul>
                        <li>Transportiert die W&uuml;nsche des Kunden an ein Softwareprodukt oder an eine
                            Gesch&auml;ftsl&ouml;sung.
                        </li>
                        <li>Beschreibt, wie sich ein Anwender eine Software w&uuml;nscht.</li>
                        <li>&bdquo;Als &lt;Rolle&gt; m&ouml;chte ich &lt;Ziel/Wunsch&gt;, um &lt;Nutzen&gt;.
                            <ul>
                                <li>Als Kunde m&ouml;chte ich mich auf einem bei einem E-Learning Portal registrieren,
                                    um mich auf eine Zertifizierung vorzubereiten.
                                </li>
                                <li>Als IT-Administrator m&ouml;chte ich eine Datenbank verwalten, um Datens&auml;tze
                                    anzulegen, zu &auml;ndern oder zu l&ouml;schen.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Epic, User Story und Task</h3>
                    <img src={epic} className="CustomComponent-Img" alt="logo"/>
                    <ul>
                        <li>Epic: H&ouml;chste Abstraktionsstufe, zu gro&szlig; f&uuml;r einen Sprint.</li>
                        <li>User Story: Enth&auml;lt Anforderungen, Basis f&uuml;r Sch&auml;tzung.</li>
                        <li>Task: Zerlegte User Story.</li>
                    </ul>
                    <h3>Allgemeine Merkmale</h3>
                    <ul>
                        <li>Stehen neben Epics und Tasks im Product Backlog.</li>
                        <li>Kurz, knapp und verst&auml;ndlich. Aus Kundensicht spezifisch und detailliert.&nbsp;</li>
                        <li>Sie bewegen sich im Anforderungsraum, nicht im L&ouml;sungsraum.</li>
                        <li>Nicht im Scrum Guide enthalten.</li>
                    </ul>
                    <h3>Prägnante User Stories</h3>

                    <ul>
                        <li>Einfach und pr&auml;gnant f&uuml;r den Anwender als Zielgruppe.</li>
                        <li>S&auml;tze mit Subjekt, Verb und Objekt konsturieren.</li>
                        <li>Verwirrende oder Zweideutige Begriffe meiden.</li>
                    </ul>
                    <h3> In aussagekräftige User Stories „investieren“ INVEST!</h3>
                    <ul>
                        <li>Independent</li>
                        <li>Negotiable</li>
                        <li>Valuable</li>
                        <li>Estimatable</li>
                        <li>Small</li>

                    </ul>
                    <h3>Story-Card</h3>
                    <img src={storyCard} className="CustomComponent-Img" alt="logo"/>

                    <h2>Ideal Day</h2>
                    <ul>
                        <li>one developer</li>
                        <li>in one eight hour day</li>
                        <li>completely free of interruptions such as drop-ins, phone calls, meetings, etc.</li>
                    </ul>
                    <p>NOT the REALITY, calendar days.</p>
                    <p>Estimating using Ideal Day:</p>
                    <ul>
                        <li>each member estimates how many ideal days he need to finish the user story</li>
                    </ul>
                    <img src={idealDay} className="CustomComponent-Img" alt="logo"/>

                </div>
            </div>
        );
    }
}

export default HuoLongComponent;