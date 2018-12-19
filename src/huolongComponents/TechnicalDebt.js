import React, { Component } from 'react';
import technicalDebt from "./huoLongRes/technicalDebt.png";

//Designguide:
//img classe Cutom-Component-Img
//div klasse contentLeft

class TechnicalDebt extends Component {

    render() {
        return (
            <div className="contentleft">
                <h2 className="berlinercontent">Technical Debt</h2>

                <h3>Was ist Technical Debt</h3>
                <ul>
                    <li>Langzeitfolgen von schlechten Design Entscheidungen.</li>
                    <li>Warum ? Wie &amp; Wann ?</li>
                    <li>mit unskaliebarer Architektur weiterarbeiten, um liefern zu k&ouml;nnen.</li>
                    <li>je l&auml;nger die Schuld, desto h&ouml;her die Kosten des Refactoring.</li>
                    <li>leihen uns Zeit von der Zukunft des Produktes.</li>
                    <li>Early Delivery vs. Refactoring Costs</li>
                </ul>

                <h3>Wie gehen wir mit Technical Debts um</h3>
                <ul>
                    <li>"Technical Debt Register" -&gt; transparent.</li>
                    <li>"Heads" -&gt; f&uuml;r geringe Schulden.</li>
                    <li>"Product Backlog" -&gt; Product Owner ben&ouml;tigt entspr. technische Kenntnisse.</li>
                    <li>Development Team schuldet dem Product Owner. Er kann auch ablehnen.</li>
                    <li>"Single Source of Requirement" im PBL.</li>
                    <li>Rechtzeitige Ber&uuml;cksichtigung der Sch&auml;tzung.</li>
                    <li>im Technical Debt Register &gt; im Product Backlog.</li>
                    <li>Kosten der R&uuml;ckzahlung&nbsp;≙ Sch&auml;tzung.</li>
                </ul>
                <p>&nbsp;</p>
                <img src={technicalDebt} className="CustomComponent-Img" alt="logo" /><br />
            </div>
        );
    }
}

export default TechnicalDebt;