import React from "react";
import { useState,useEffect } from "react";
import CartPageComponent from "../components/cartPageComponent";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StyledCartPage from "../StyledComponents/StyledCartPage";
const CartPage = () => {
    var products =  useSelector((state) => state.allProducts.product)
    console.log("from cart",products)
    var navigate = useNavigate()
    const checkOut = () => {
        navigate("/checkout")
    }
    const [TotalPrice,SetTotalPrice]=useState({})
    var products = JSON.parse(localStorage.getItem('cart'))
    // useEffect(() => {
    //     const fetchcart = async() => {
             
    //         await console.log("products",typeof(products))
    //         await SetCartItems(products)
    //         await console.log("cart item",CartItems)
    //     }
    //     fetchcart()
    // },[])
    
    return(
        <React.Fragment>
        <StyledCartPage>
        < Navbar />
        <div>
            <p>items</p>
            { products.map((p) => (
            <CartPageComponent item={p}/>
             ))}
        </div>
        <div className="checkout-button-container" onClick={checkOut}>
            <span className="checkout-button" >CheckOut</span>
        </div>
        </StyledCartPage>
        </React.Fragment>
    )
}
export default CartPage