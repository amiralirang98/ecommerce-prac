import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import StyledProductCard from "../StyledComponents/StyledProductCard";
const Card = (props) => {
    
    const [IsInCart,SetIsInCart] = useState(false)
    var navigate = useNavigate()
    const viewmore = () => {
        navigate(`/product/${props.product.id}`)
    }
    var cart1 = JSON.parse(localStorage.getItem('cart'))
    console.log('cart1',cart1)
    //     var alreadyExistingItem1 = cart1.filter((h) => h.id === props.product.id)
    //     if(!alreadyExistingItem1=="")
    //     {
    //         SetIsInCart(true)
    //     }
    const addToCart = (item) => {
        // var cart = {e.props.product.}
        console.log(item)
        var cart = JSON.parse(localStorage.getItem('cart'))
        var alreadyExistingItem = cart.filter((h) => h.id === item.id)
        if(alreadyExistingItem == "")
        {
        cart.push(item)
        localStorage.setItem("cart",JSON.stringify(cart))
        SetIsInCart(true)
        }
        else{
            SetIsInCart(true)
            alert('item already exixt in cart')
        }
    }
    return(
        <StyledProductCard>
        <div className="product-card-container">
            <div className="product-image-container">
            <img src={props.product.image} className="product-image"/>
            </div>
            <div className="product-description-container">
            <p>{props.product.price}</p>
            <p>{props.product.title}</p>
            </div>
            <div className="product-card-buttons">
            <div className="product-button left-button" onClick={() => addToCart({
                "id":props.product.id,
                "name":props.product.title,
                "img": props.product.image,
                "price": props.product.price,
                "quantity":1
            })}>
            <span>{IsInCart ? `Added`:`Add To Cart`}</span>
            </div>
            <div className="product-button right-button" onClick={viewmore}>
                
            <span  >View More</span>
            </div>
            {/* <div className="right-button login-button" onClick={viewmore}>
                <p>View More</p>
                </div> */}
            </div>
        </div>
        </StyledProductCard>
    )
}
export default Card