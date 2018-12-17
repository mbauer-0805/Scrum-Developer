import React, { Component } from 'react';

class CustomComponent extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="CustomComponent">
				<h2>{this.props.title}</h2>
				<p>{this.props.description}</p>
              <div className="CustomComponent-div">
                  <p>&nbsp;</p>

                  <ol>
                      <li>Unterst&uuml;tzt das Team zum Einhalten der im Scrum Guide beschriebenen Richtlinien.</li>
                      <li>Hilft, die Schnittstelle des Scrum-Teams nach au&szlig;en m&ouml;glichst effizient zu gestalten.</li>
                  </ol>
                  <p>&nbsp;</p>
                  <h3>Scrum Master -&gt; Product Owner</h3>
                  <ol>
                      <li>Versucht, das vollkomme Verst&auml;ndnis der Ziele, des Umfangs und der Produktdom&auml;ne im Team zu gew&auml;hrleisten.</li>
                      <li>Vermittelt die Notwendigkeit der Pflege des Product Backlogs.</li>
                      <li>Unters&uuml;tzt bei Anfrage oder Bedarf die Scrum-Events.</li>
                  </ol>
                  <p>&nbsp;</p>
                  <h3>Scrum Master -&gt; Development Team</h3>
                  <ol>
                      <li>Coacht das Team zur besseren Selbstorganisation und zur Cross-Functionality.</li>
                      <li>R&auml;umt impediments f&uuml;r das Team aus dem Weg.</li>
                      <li>Coacht das Team in einer Umgebung, in der Scrum noch nicht komplett adaptiert wurde.</li>
                      <li>Unters&uuml;tzt bei Anfrage oder Bedarf die Scrum-Events.</li>
                  </ol>
                  <p>&nbsp;</p>
                  <h3>Scrum Master -&gt; Organization</h3>
                  <ol>
                      <li>F&uuml;hrung und Coaching der Einf&uuml;hrung von Scrum.</li>
                      <li>Hilft Angestellten und den Stakeholdern Scrum, sowie empirische Produkt (Software) Entwicklung zu verstehen.</li>
                      <li>F&uuml;hrt bei Bedarf Ver&auml;nderungen durch, um die Produktivit&auml;t des Scrum Teams zu verbessern.</li>
                      <li>Arbeitet mit anderen Scrum Mastern zusammen, um die allgemeine Effektivit&auml;t von Scrum in der Organisation zu steigern.</li>
                  </ol>
              </div>
			</div>
		);
	}
}

export default CustomComponent;