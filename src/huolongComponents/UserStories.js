import React, {Component} from 'react';
import increment from "../huoLongRes/increment.jpg";
import epic from "../huoLongRes/epic.png";
import storyCard from "../huoLongRes/Story_Card.png";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class Klassenname extends Component {

    render() {
        return (
            <div><img src={increment} className="CustomComponent-Img" alt="logo"/>
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
            </div>
        );
    }
}

export default Klassenname;