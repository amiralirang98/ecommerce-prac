import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setProduct } from "../redux/actions/action";
// import "../style/loginfile.css"
import StyledLoginFile from "../StyledComponents/StyledLoginFile";
const LoginPage =  () => {


    var dispatch = useDispatch()
   


    useEffect(() => {
        const productcall = async() => {
            var resp =  await fetch('https://fakestoreapi.com/products')
            var prod = await resp.json()
            dispatch(setProduct(prod))
            console.log('fetch function called',prod)
            if(localStorage.getItem("visiblity")!=null)
            {
                console.log("doing nothing")
            }
            else{
            var arr = []
            for(let i=0;i<prod.length;i++)
            {
                
                var visstat = {
                    id:prod[i].id,
                    visiblity_status:true
                }
                arr.push(visstat)

            }
            localStorage.setItem("visiblity",JSON.stringify(arr))
        }
        }
        productcall()

    },[])

    var navigate = useNavigate()
    var initialValues={
        email:"",
        name:""
    }
    const [FormValues,SetFormValues]=useState(initialValues)
    const SubmitHandler = () => {
        console.log('form submitted')
        localStorage.setItem(`email`,FormValues.email)
        localStorage.setItem('name',FormValues.name)
        var cart =[]
        localStorage.setItem('cart',JSON.stringify(cart))
        navigate('/landingpage')
    }
    const onFormValueCange = (e) => {
        SetFormValues({...FormValues,[e.target.name]:e.target.value})
        console.log(FormValues.email)
    }
    return(
        <StyledLoginFile>
        <div className="login-form-container">
            <div className="form-heading"><h3>Login Form</h3></div>
            <div>
            <form onSubmit={SubmitHandler}>
                {/* <div> */}
                    <div className="form-tag-label-container">
                    <label><i class="fa-solid fa-user"></i> User Name</label>
                    </div>
                    <div className="form-input-field-container">
                    <input type="text" name="name" value={FormValues.name} onChange={onFormValueCange} className="form-field" placeholder="User Name"/>
                    </div>
                {/* </div> */}
                {/* <div> */}
                <div className="form-tag-label-container">
                <label>Email</label>
                </div>
                <div className="form-input-field-container">
                <input type="email" name="email" value={FormValues.email} onChange={onFormValueCange} className="form-field" placeholder="Email Address"  />
                </div>
                {/* </div> */}
                <div className="login-button" onClick={SubmitHandler}>
                <p>Login</p>
                </div>
            </form>
            </div>

        </div>
        </StyledLoginFile>
    )
}

export default LoginPage