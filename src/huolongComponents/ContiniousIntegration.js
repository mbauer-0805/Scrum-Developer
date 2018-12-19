import React, {Component} from 'react';
import contIntegration from "../huoLongRes/ContiniousIntegration2.png";
import contIntegrationBrands from "../huoLongRes/ContiniousIntegration.png";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class ContiniousIntegration extends Component {

    render() {
        return (
            <div>
                <h2>Continious Integration</h2>
                <img src={contIntegration} className="CustomComponent-Img" alt="logo"/><br/>
                <img src={contIntegrationBrands} className="CustomComponent-Img" alt="logo"/>

            </div>
        );
    }
}

export default ContiniousIntegration;