import React, {Component} from 'react';

import csgrafik from "../berlinerRes/cs.png";

class ProductBacklogItems extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>Product Backlog Items and 3Cs</h2>
                    <img src={csgrafik} alt="three cs bild" />

                </p>
            </div>

        );

    }
}

export default ProductBacklogItems;
