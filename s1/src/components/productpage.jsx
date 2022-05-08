import React from "react";
import  ProductImg from "./images/product.jpg"
import "./productpage.css"
import bigImg1 from "./images/pp1.jpg"
import bigImg2 from "./images/pp2.jpg"
import bigImg3 from "./images/pp3.jpg"
import bigImg4 from "./images/pp4.jpg"


export const ProductPage = () => {
    return (
        <div>
            <div className="product-content">
                <div className="prod-img">
                    <img src={ProductImg} alt="" />
                </div>
                <div className="prod-txt">
                    <div className="prod-heading">
                    REFLEX SMART WATCH WITH SILICONE BLACK STRAP
                    </div>
                    <div className="price-flex">
                    <div className="strike-price">
                        MRP  $5995.00 
                    </div>
                    <div className="actual-price">
                        OFFER PRICE $3995
                    </div>
                    <div className="discount">
                        (33% Off)
                    </div>
                    </div>
        
                    <div className="product-description">Fastrack Smart Unisex Watch with Black Strap</div>
                
                    <div className="quantity">
                        <div className="quantity-heading">
                            Net Qty
                        </div>
                        <div className="increment">
                            <button className="increment-button">-</button>
                                <div className="quantity-number">
                                    counter
                                </div>
                            <button className="decrement-button">+</button>
                        </div>
                    </div>
                    <div className="stock">
                            In Stock
                        </div>
                    <div className="cart-buttons">
                        <button className="add-to-cart">
                            Add to cart
                        </button>
                        <button className="heart">♥</button>
                        <button className="book-an-appointment">
                            Book an Appointment
                        </button>
                     </div>
                 </div>
            </div>

            <div className="grey-box">

            </div>

            <div className="second-half-heading">
                PRODUCT FEATURES
            </div>

            <div className="second-half">
            
                <div className="second-half-body">
                    <img src={bigImg1} alt="" />
                    <img src={bigImg2} alt="" />
                    <img src={bigImg4} alt="" />
                </div>
            </div>
            <div className="third-half">

            </div>
        </div>
    )
}       

