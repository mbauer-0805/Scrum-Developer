import React, {Component} from 'react';
import emergArch from "../huoLongRes/EmergentArchitecture.jpg";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class EmergentArchitecture extends Component {

    render() {
        return (
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
        );
    }
}

export default EmergentArchitecture;