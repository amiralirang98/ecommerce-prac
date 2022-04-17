import React from "react"
import { useNavigate } from "react-router-dom"
import "../style/OrderConfirmationPage.css"
import { useDispatch } from "react-redux"
import { setCartNum } from "../redux/actions/action"

const OrderConfirmationPage = () => {
    var navigate = useNavigate()
    var dispatch = useDispatch()
    var ordDetails = JSON.parse(localStorage.getItem("order"))
    var cart = JSON.parse(localStorage.getItem("cart"))
    const submitConfirm = () => {
        ordDetails=[]
        cart=[]
        localStorage.setItem("order",JSON.stringify(ordDetails))
        localStorage.setItem("cart",JSON.stringify(cart))
        dispatch(setCartNum(cart.length))

        navigate('/landingpage')
    }
    return(
        <div className="OrderInfo-container">
            <h1>Your Order is Confirmed</h1>
            <h3>{`Hello ${ordDetails.name} Your order will be delivered to ${ordDetails.address} in 7 business days`}</h3>
            <button onClick={submitConfirm}>OK</button>
        </div>
    )
}
export default OrderConfirmationPage