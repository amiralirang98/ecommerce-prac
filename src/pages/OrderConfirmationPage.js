import React from "react"
import { useNavigate } from "react-router-dom"
import "../style/OrderConfirmationPage.css"

const OrderConfirmationPage = () => {
    var navigate = useNavigate()
    var ordDetails = JSON.parse(localStorage.getItem("order"))
    const submitConfirm = () => {
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