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
import contIntegrationBrands from "./huoLongRes/ContiniousIntegration.png";
import contIntegration from "./huoLongRes/ContiniousIntegration2.png";
import sprintPlanning from "./huoLongRes/sprint_planning.jpg";
import branchMerch1 from "./huoLongRes/branchMergeWhole.png";
import branchMerch2 from "./huoLongRes/branchMerchWhole2.PNG";
import branchMerch3 from "./huoLongRes/branchMerchWhole3.PNG";
import bduf from "./huoLongRes/bduf.png";
import tasks from "./huoLongRes/tasks.jpg";
import emergArch from "./huoLongRes/EmergentArchitecture.jpg";
import bug1 from "./huoLongRes/Bug1.png";
import bug2 from "./huoLongRes/bug2.jpg";
import poor_bug_report from "./huoLongRes/poor-bug-report.jpg";
import high_quality_bug_report from "./huoLongRes/high-quality-bug-report.jpg";
import bugreport from "./huoLongRes/bug-report.jpg";
import tdd from "./huoLongRes/TDD.jpg";
import unittest from "./huoLongRes/UnitTest.png";
import meme from "./huoLongRes/meme.png";
import jUnit from "./huoLongRes/jUnitTest.PNG";


class HuoLongComponent extends Component {

    render() {
        return (
            <div className="CustomComponent">

                <div className="CustomComponent-div">
                    <div>
                        <h1>Scrum Team</h1>

                        <img src={team} className="Team" alt="logo"/>
                        <div className="contentleft">
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
                    </div>
                    <h1>Scrum Master</h1>
                    <img src={master} className="App-logo" alt="logo"/>

                    <p>&nbsp;</p>
                    <div className="contentleft">
                        <ul>
                            <li>Unterst&uuml;tzt das Team zum Einhalten der im Scrum Guide beschriebenen Richtlinien.
                            </li>
                            <li>Hilft, die Schnittstelle des Scrum-Teams nach au&szlig;en m&ouml;glichst effizient zu
                                gestalten.
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <h3>Scrum Master -&gt; Product Owner</h3>
                        <ul>
                            <li>Versucht, das vollkomme Verst&auml;ndnis der Ziele, des Umfangs und der
                                Produktdom&auml;ne
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
                            <li>Coacht das Team in einer Umgebung, in der Scrum noch nicht komplett adaptiert wurde.
                            </li>
                            <li>Unters&uuml;tzt bei Anfrage oder Bedarf die Scrum-Events.</li>
                        </ul>
                        <p>&nbsp;</p>
                        <h3>Scrum Master -&gt; Organization</h3>
                        <ul>
                            <li>F&uuml;hrung und Coaching der Einf&uuml;hrung von Scrum.</li>
                            <li>Hilft Angestellten und den Stakeholdern Scrum, sowie empirische Produkt (Software)
                                Entwicklung zu verstehen.
                            </li>
                            <li>F&uuml;hrt bei Bedarf Ver&auml;nderungen durch, um die Produktivit&auml;t des Scrum
                                Teams zu
                                verbessern.
                            </li>
                            <li>Arbeitet mit anderen Scrum Mastern zusammen, um die allgemeine Effektivit&auml;t von
                                Scrum
                                in der Organisation zu steigern.
                            </li>
                        </ul>
                    </div>
                    <h2>Manifesto 1-6</h2>
                    <img src={manifest} className="CustomComponent-Img-Rotate" alt=""/>

                    <h2>Scrum Backlog</h2>
                    <img src={sBacklog} className="CustomComponent-Img-Rotate" alt=""/>

                    <h2>Spring Review</h2>
                    <div className="contentleft">
                        <p>When : at the END of the Sprint - &gt;</p>
                        <ul>
                            <li>inspect the Increment</li>
                            <li>adapt Product Backlog</li>
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
                    </div>
                    <img src={reviewMeeting} alt="logo"/>

                    <h2>Daily Scrum</h2>
                    <div className="contentleft">
                        <ul>
                            <li>F&ouml;rdern die Kommunikation</li>
                            <li>Machen andere Meetings &uuml;berfl&uuml;ssig</li>
                            <li>Identifizieren zu beseitigende Hindernisse</li>
                            <li>Fokussieren und f&ouml;rdern die schnelle Entscheidungsfindung</li>
                            <li>Erh&ouml;hen den Wissensstand des Teams</li>
                            <li>&Uuml;berpr&uuml;fung und Anpassung</li>
                        </ul>
                    </div>
                    <img src={review} alt="logo"/>
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
                    <img src={increment} className="CustomComponent-Img" alt="logo"/>
                    <h2>User Stories</h2>
                    <div className="contentleft">
                        <ul>
                            <li>Transportiert die W&uuml;nsche des Kunden an ein Softwareprodukt oder an eine
                                Gesch&auml;ftsl&ouml;sung.
                            </li>
                            <li>Beschreibt, wie sich ein Anwender eine Software w&uuml;nscht.</li>
                            <li>&bdquo;Als &lt;Rolle&gt; m&ouml;chte ich &lt;Ziel/Wunsch&gt;, um &lt;Nutzen&gt;.
                                <ul>
                                    <li>Als Kunde m&ouml;chte ich mich auf einem bei einem E-Learning Portal
                                        registrieren,
                                        um mich auf eine Zertifizierung vorzubereiten.
                                    </li>
                                    <li>Als IT-Administrator m&ouml;chte ich eine Datenbank verwalten, um
                                        Datens&auml;tze
                                        anzulegen, zu &auml;ndern oder zu l&ouml;schen.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <h3>Epic, User Story und Task</h3>
                    </div>
                    <img src={epic} className="CustomComponent-Img" alt="logo"/>
                    <div className="contentleft">
                        <ul>
                            <li>Epic: H&ouml;chste Abstraktionsstufe, zu gro&szlig; f&uuml;r einen Sprint.</li>
                            <li>User Story: Enth&auml;lt Anforderungen, Basis f&uuml;r Sch&auml;tzung.</li>
                            <li>Task: Zerlegte User Story.</li>
                        </ul>
                        <h3>Allgemeine Merkmale</h3>
                        <ul>
                            <li>Stehen neben Epics und Tasks im Product Backlog.</li>
                            <li>Kurz, knapp und verst&auml;ndlich. Aus Kundensicht spezifisch und
                                detailliert.&nbsp;</li>
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
                    </div>
                    <h3>Story-Card</h3>
                    <img src={storyCard} className="CustomComponent-Img" alt="logo"/>

                    <h2>Ideal Day</h2>
                    <div className="contentleft">
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
                    </div>
                    <img src={idealDay} className="CustomComponent-Img" alt="logo"/>

                    <h2>Continious Integration</h2>
                    <img src={contIntegration} className="CustomComponent-Img" alt="logo"/><br/>
                    <img src={contIntegrationBrands} className="CustomComponent-Img" alt="logo"/>

                    <h2>Sprint Planning</h2>
                    <img src={sprintPlanning} className="CustomComponent-Img" alt="logo"/>
                    <div className="contentleft">
                        <p>Who?</p>
                        <ul>
                            <li>Scrum Master: make sure the event takes place</li>
                            <li>Product Owner: clarifies the details of the candidate product backlog items</li>
                            <li>The team members: discuss the detail, ask questions, choose items for sprint backlog
                            </li>
                        </ul>
                        <p>When&nbsp;</p>
                        <ul>
                            <li>on 1st day of the Sprint</li>
                            <li>8 hours time-boxed for one month Sprint</li>
                        </ul>
                        <p>Answer 2 main questions:</p>
                        <ul>
                            <li>What can be delivered in the Increment of the upcoming&nbsp;sprint?</li>
                            <li>How to achieve it?</li>
                        </ul>
                        <p>Results</p>
                        <ul>
                            <li><strong>A Sprint goal</strong>: one-or two-sentence, describes what the team plans to do
                                achieve during the Sprint.
                            </li>
                            <li><strong>A Sprint backlog</strong></li>
                        </ul>

                        <h2>Branching vs. Merging</h2>
                        <img src={branchMerch1} className="CustomComponent-Img" alt="logo"/><br/>
                        <img src={branchMerch2} className="CustomComponent-Img" alt="logo"/><br/>
                        <img src={branchMerch3} className="CustomComponent-Img" alt="logo"/><br/>
                    </div>

                </div>
                <div className="contentleft">
                    <h2>BDUF (Big Design Up Front)</h2>
                    <ul>
                        <li>+ Bug fixes take less time</li>
                        <li>+ Used process</li>
                        <li>- If the&nbsp;<em>cost of planning</em>&nbsp;is greater than the&nbsp;<em>cost of
                            fixing</em>&nbsp;then time spent planning is wasted.
                        </li>
                        <li>- Poorly adaptable in changing design</li>
                        <li>- time wasting</li>
                        <li>- only useful in waterfall models</li>
                    </ul>
                    <h3>Alternative&nbsp;</h3>
                    <p>Emergent Design</p>
                    <img src={bduf} className="CustomComponent-Img" alt="logo"/>
                </div>
                <div className="contentleft">
                    <h2>Emergent Architecture</h2>
                    <ul>
                        <li>Needs emerge due to functional and non-functional requirements.</li>
                        <li>
                            <div>Some parts of Non-functional requirements(i.e. Security or Scalability) are ordered
                                high in the Product Backlog, because they are needed for the initial release of viable
                                products.
                            </div>

                        </li>
                        <li>So as we evolve the system, we build only enough architecture and design to support the
                            requirements of that Sprint.
                        </li>
                        <li>With every Sprint, the architecture and design emerges in response to more and more
                            high-ordered requirements
                        </li>
                    </ul>
                    <img src={emergArch} className="CustomComponent-Img" alt="logo"/>
                </div>
                <div className="contentleft">
                    <h2 className="berlinercontent">Communicate Work: Tasks</h2>
                    <p><strong>Tasks</strong></p>
                    <ul>
                        <li>breaks&nbsp;user stories&nbsp;or PBIs at the sprint planning meeting to a more granular
                            level.
                        </li>
                        <li>the smallest unit to track work.</li>
                        <li>completed by one person on the team.</li>
                        <li>shouldn'ttake more than a day</li>
                    </ul>
                    <img src={tasks} className="CustomComponent-Img" alt="logo"/>
                </div>
                <div className="contentleft">
                    <h2 className="berlinercontent">Bugs</h2>
                    <ul>
                        <li>Bug Report schreiben</li>
                        <li>Bug Backlog</li>
                        <li>Good Code Base</li>
                        <li>Ab&auml;gen ob der Bug kritisch ist</li>
                        <li>Product Owner melden</li>
                        <li>Jedes Team geht mit Bugs anders um</li>
                        <li>Nicht wichtige Bugs vergessen</li>
                        <li>Kritische Bugs sofort behandeln</li>
                    </ul>
                    <img src={bug1} className="CustomComponent-Img" alt="logo"/>
                    <img src={bug2} className="CustomComponent-Img" alt="logo"/>
                </div>
                <div className="contentleft">
                    <h2 className="berlinercontent">Reporting a Bug</h2>

                    <ul>
                        <li>A good bug report contains the information needed to reproduce and fix problems</li>
                        <li>A good bug report is an efficient form of communication for both bug reporter and bug
                            receiver
                        </li>
                        <li>A good bug report is resolved as fast as possible</li>
                        <li>A good bug report is sent to the person in charge</li>
                        <li>A good bug report is on point</li>
                        <li>A good bug report is filed in a defined way</li>
                        <li>A good bug report establishes a common ground for collaboration</li>
                    </ul>
                    <h3 className="berlinercontent">Way of a Bug Report</h3>
                    <img src={bugreport} className="CustomComponent-Img" alt="logo"/>
                    <h3 className="berlinercontent">Poor Bug Report</h3>
                    <img src={poor_bug_report} className="CustomComponent-Img" alt="logo"/><br/>
                    <h3 className="berlinercontent">High Quality Bug Report</h3>
                    <img src={high_quality_bug_report} className="CustomComponent-Img" alt="logo"/><br/>


                </div>

                
                <div className="contentleft">
                    <h2 className="berlinercontent">Unit Tests</h2>
                    <ul>
                        <li>sehr h&auml;ufige Ausf&uuml;hrung zur Qualit&auml;tssicherung angestrebt.</li>
                        <li>vollst&auml;ndig automatisierte Tests vorliegend.</li>
                        <li>in TDD mehr zur Designsteuerung, als zur Defektfindung.</li>
                        <li>sie bilden wichtige Voraussetzung beim Refactoring, um versehentliche &Auml;nderungen
                            aufzudecken.
                        </li>
                        <li>Sicherstellung, dass neue Features bestehende Funktionen nicht bricken.</li>
                        <li>Helfen bei der Dokumentation des Systems.</li>
                        <li>von Kent Beck</li>
                        <img src={unittest} className="CustomComponent-Img" alt="logo"/><br/>

                    </ul>
                </div>
                <div className="contentleft">
                    <h2 className="berlinercontent">F.I.R.S.T</h2>
                    <ul>
                        <li><strong>Fast</strong>. It is not uncommon for mature projects to have thousands of unit
                            tests. Unit tests should take very little time to run. Milliseconds.
                        </li>
                        <li className=""><strong>Isolated</strong>. Unit tests are standalone, can be run in isolation,
                            and have no dependencies on any outside factors such as a file system or database.
                        </li>
                        <li><strong>Repeatable</strong>. Running a unit test should be consistent with its results, that
                            is, it always returns the same result if you do not change anything in between runs.
                        </li>
                        <li><strong>Self-Checking</strong>. The test should be able to automatically detect if it passed
                            or failed without any human interaction.
                        </li>
                        <li className=""><strong>Timely</strong>. A unit test should not take a disproportionally long
                            time to write compared to the code being tested. If you find testing the code taking a large
                            amount of time compared to writing the code, consider a design that is more testable.
                        </li>
                    </ul>
                    <img src={meme} className="CustomComponent-Img" alt="logo"/><br/>

                </div>
                <div className="contentleft">
                    <h2 className="berlinercontent">Best practices for unit test</h2>

                    <ul>
                        <li>Naming your tests: explicitly express the intent</li>
                        <li>method name</li>
                        <li>scenario</li>
                        <li>expected behavior</li>
                        <li>Arrange your tests</li>
                        <li>Arrange: create, setting up</li>
                        <li>Act&nbsp;</li>
                        <li>Assert: expected behavior?</li>
                        <li>Input used in test should be simplest possible</li>
                        <li>Avoid logic in tests: no if, for, switch...</li>
                        <li>Helper methods to setup and teardown</li>
                        <li>Avoid multiple asserts: create a separate test for each assert</li>
                        <li>Validate private methods by unit testing public methods</li>
                    </ul>
                    <img src={jUnit} className="CustomComponent-Img" alt="logo"/><br/>

                </div>
                <div className="contentleft">
                    <h2 className="berlinercontent">Test Driven Development (TDD)</h2>
                    <ul>
                        <li>building and executing tests before coding</li>
                        <li>part of "test-first" approach</li>
                    </ul>

                    <img src={tdd} className="CustomComponent-Img" alt="logo"/><br/>
                    <ol>
                        <li> Write the test first.</li>
                        <li>Run the test and watch it fail.</li>
                        <li> Write just the amount of code needed to pass the test.</li>
                        <li> Continue implementing new code until all tests pass.</li>
                        <li> Refactor.</li>
                    </ol>

                    <h3>Advantages of TDD</h3>
                    <ul>
                        <li> better quality, lower error</li>
                        <li> Improved coding efficiency</li>
                        <li> Early detection and correction</li>
                        <li> Cost optimazation</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HuoLongComponent;