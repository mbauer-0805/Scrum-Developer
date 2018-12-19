import React, {Component} from 'react';
import unittest from "../huoLongRes/UnitTest.png";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class UnitTests extends Component {

    render() {
        return (
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
        );
    }
}

export default UnitTests;