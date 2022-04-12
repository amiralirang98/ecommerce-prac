import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/navbar.css"
const Navbar = () => {
    var navigate=useNavigate()
    return(
        <div className="navbar">
        
            <ul className="navbar-component navbar-left-component">
                <li onClick={() => navigate("/landingpage")}><p>Home</p></li>
                <li onClick={() => navigate("/adminpage")}><p>Admin Page</p></li>
                <li className="rightpart" onClick={() => navigate("/cart")}><p>cart</p></li>
                {/* <li className="rightpart" onClick={() => navigate("/adminpage2")}><p>admin2</p></li> */}
            </ul>

        
        </div>
    )
}
export default Navbar