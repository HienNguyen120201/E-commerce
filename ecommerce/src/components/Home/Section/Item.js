import React from 'react';
import { FaStar } from "react-icons/fa";
// FaStar
import '../../../css/HomeStyle/Item.css'

const img = 'https://i.ibb.co/Tmzp5pF/13-pro-black-copy.jpg';

class Item extends React.Component {

    render() {
        return (
            <div className="item">
                <div className="item-img">
                    <img src={this.props.imageLink} alt="product">
                    </img>
                </div>
                <p className="device">
                    {this.props.type} 
                </p>
                <p className="device-name">
                    {this.props.productName}
                </p>
                <p className="price">
                    <span>{this.props.productPrice}</span> VND    
                </p>
                <p className="old-price">
                    {this.props.protductOldPrice}
                </p>
                    <div className="rating">
                        <div className="horizontal-line"></div>
                        <span className="stars">
                            {
                                this.props.stars.map(star => 
                                    <FaStar key={star} />
                                )
                            }
                        </span>
                        <div className="horizontal-line"></div>
                    </div>
            
            </div>

        )
    }
}

export default Item;