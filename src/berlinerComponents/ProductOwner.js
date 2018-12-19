import React, {Component} from 'react';
import productownergrafik from "../berlinerRes/productOwner.png";



class ProductOwner extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>Product Owner</h2>
                    <img src={productownergrafik} alt="productowner bild" />
                </p>
            </div>

        );

    }
}

export default ProductOwner;
