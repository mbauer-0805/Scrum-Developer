import React, {Component} from 'react';
import bduf from "../huoLongRes/bduf.png";


//Designguide:
//h2 css klasse berliner..
//img classe Cutom-Component-Img
//div klasse contentLeft

class BDUF extends Component {

    render() {
        return (
            <div>
                <h2 className="berlinercontent">BDUF (Big Design Up Front)</h2>

                <div className="contentleft">
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
                    <h3 className="berlinercontent">Alternative&nbsp;</h3>
                    <p>Emergent Design</p>
                    <img src={bduf} className="CustomComponent-Img" alt="logo"/>
                </div>
            </div>
        );
    }
}

export default BDUF;