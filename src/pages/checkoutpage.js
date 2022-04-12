import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledLoginFile from "../StyledComponents/StyledLoginFile";
const ChekoutPage = () => {
var navigate = useNavigate()
var initial = {
    "name":"",
    "email":"",
    "address":"",
    "PhoneNum":"",
}
var [FormValues,SetFormValues]=useState(initial)
var cart =  JSON.parse(localStorage.getItem('cart'))
var sum = 0
for(let i=0;i<cart.length;i++){
    var a = cart[i].price*cart[i].quantity
    sum=sum+a
}
const onFormChange = (e) => {
    SetFormValues({...FormValues,[e.target.name]:e.target.value})
}

const handleSubmit = () => {
    console.log(FormValues)
    var order = {
        name:FormValues.name,
        email:FormValues.email,
        address:FormValues.address,
        phonenum:FormValues.PhoneNum
        
    }
    localStorage.setItem('order',JSON.stringify(order))

    navigate("/orderconfirmation")
}
return(
    <StyledLoginFile>
    <div>
        <div className="login-form-container">
        <div className="form-heading"><h3>Personel Details</h3></div>
        <div>
        <form>
            <div className="form-tag-label-container">
                <label>Name</label>
            </div>
            <div className="form-inpu-field-container">
                <input type="text" name="name" value={FormValues.name} onChange={onFormChange} required/>
            </div>
            <div className="form-tag-label-container">
                <label>email</label>
            </div>
            <div className="form-inpu-field-container">
                <input type="email" name="email" value={FormValues.email} onChange={onFormChange} required/>
            </div>
            <div className="form-tag-label-container">
                <label>Address</label>
            </div>
            <div className="form-inpu-field-container">
                <textarea type="text" name="address" value={FormValues.address} onChange={onFormChange} required></textarea>
            </div>
            <div className="form-tag-label-container">
                <label>Phone Number</label>
            </div>
            <div className="form-inpu-field-container">
                <input type="number" name="PhoneNum" value={FormValues.PhoneNum} onChange={onFormChange} required/>
            </div>
            <div>
                <h4>Total amount is {sum}</h4>
            </div>
            <div>
            <button type="submit" onClick={handleSubmit}>Confirm Order</button>
            </div>
        </form>
        </div>
        </div>
    </div>
    </StyledLoginFile>
)
}
export default ChekoutPage