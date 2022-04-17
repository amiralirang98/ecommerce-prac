import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setCartNum,setCart } from "../redux/actions/action";
 const CartPageComponent = (props) => {
      var navigate = useNavigate()
      var dispatch = useDispatch()
     const [ProductQuantity,SetProductQuantity] = useState(1)
     var cart = useSelector((state) => state.allProducts.cart)
     var quant = useSelector((state)=> state.allProducts.cart)
     console.log("quantity from state",quant)
     const incrementValue = () => {
       
         var p =  cart.find(p => p.id === props.item.id)
         p.quantity =p.quantity+1
         //localStorage.setItem("cart",JSON.stringify(cart))
         dispatch(setCart(cart))
         SetProductQuantity(ProductQuantity+1)
     }
     const decrementValue = () => {
        var p =  cart.find(p => p.id === props.item.id)
        p.quantity =p.quantity-1
        dispatch(setCart(cart))
        SetProductQuantity(ProductQuantity-1)
        if(p.quantity==0){
            var cart1 = cart.filter((i) => i.id!=props.item.id)
            console.log("cat1",cart1)
            localStorage.setItem("cart",JSON.stringify(cart1))
            dispatch(setCartNum(cart1.length))
            dispatch(setCart(cart1))
            navigate("/cart")
        }
    }
    //  const onQuantityChange = () => {
    //      var cart = JSON.parse(localStorage.getItem("cart"))
    //      var p =  cart.find(p => p.id === props.item.id)
    //      p.quantity =ProductQuantity
    //      localStorage.setItem("cart",JSON.stringify(cart))

    //  }
     return(
         <div className="cart-page-component">
             <div>
             <div className="cart-component-image">
                <img src={props.item.img} className="cart-image" />
            </div>
            <div className="product-description">
                <h3>Prce: ${props.item.price}</h3>
                <h3>Name: ${props.item.name}</h3>
            </div>
            {/* <div className="cart-component-quantity">
                {ProductQuantity}
            </div> */}
            </div>
            <div className="inc-dec-buttons">
                <div className="cart-button inc-button" onClick={incrementValue}>
            <span className="button-span">+</span>
            </div>
            <div className="productQuantity">
            <span className="prod-quant-span">{props.item.quantity}</span>
            </div>
            <div className="cart-button dec-button" onClick={decrementValue}>
            <span className="button-span">-</span>
            </div>
            
            </div>
         </div>
     )

 }
  export default CartPageComponent