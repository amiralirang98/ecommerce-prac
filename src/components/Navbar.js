import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/navbar.css"
import { useSelector,useDispatch } from "react-redux";
import { setCartNum,setCart } from "../redux/actions/action";
const Navbar = () => {
    var navigate=useNavigate()
    var dispatch = useDispatch()
    var cart = useSelector((state)=> state.allProducts.cart)
    var cartValue =  useSelector((state) => state.allProducts.cartNum)
    const logout = () => {
        
        var order = JSON.parse(localStorage.getItem("order"))
        var name = localStorage.getItem("name")
        var email =localStorage.getItem("email")
        cart = []
        order = []
        name = []
        email = []
        localStorage.setItem("cart",JSON.stringify(cart))
        localStorage.setItem("order",JSON.stringify(order))
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        dispatch(setCartNum(cart.length))
        dispatch(setCart(cart))
        navigate("/")
    }
    return(
        <div className="navbar">
        
            <ul className="navbar-component navbar-left-component">
                <li onClick={() => navigate("/landingpage")}><p>Home</p></li>
                <li onClick={() => navigate("/adminpage")}><p>Admin Page</p></li>
                <li className="rightpart" onClick={logout}><p>Logout</p></li>
                <li className="rightpart" onClick={() => navigate("/cart")}><p>cart <span style={{color:'red'}}>{cartValue}</span></p></li>
                {/* <li className="rightpart" onClick={() => navigate("/adminpage2")}><p>admin2</p></li> */}
            </ul>

        
        </div>
    )
}
export default Navbar