import React from "react";
import { Link } from "react-router-dom";
import "./../assets/css/ProductItem.css";

const formatVND = (num) =>{
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
}

function ProductItem({title, imgSrc, discount_price, market_price, isSale, saleText}) {
    return (
        <div className="product-item">
            <div className="product-item__image">
                <Link to="/">
                    <img src={imgSrc} alt="dienthoai" width="200px" />
                </Link>
            </div>

            <div className="product-item__info">
                <Link to="/">{title}</Link>
                <div className="product-item__price">
                    <span className="discount-price">{formatVND(discount_price)}</span>
                    {isSale ? (<span className="market-price">{formatVND(market_price)}</span>): ""}
                </div>
                <div className="product-item-button-area">
                    <div className="btn-small green-gradient">Trả góp 0%</div>
                    {isSale? (<div className="btn-small red-gradient">{saleText}</div>): ""}
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
