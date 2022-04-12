import React from "react";
import Navbar from "../components/Navbar"
import { useEffect,useState } from "react";
 import Card from "../components/productcard"
import { useDispatch,useSelector } from "react-redux";
import { setProduct } from "../redux/actions/action";

import StyledLandingPage from "../StyledComponents/StyledLandingPage";
const LandingPage = () =>
{
    var products =  useSelector((state) => state.allProducts.product)
    var name = localStorage.getItem('name')
    var visiblity_status = JSON.parse(localStorage.getItem("visiblity"))
    console.log("visiblity_status",products)
     var visibleProducts = products.filter(p => visiblity_status[parseInt(p.id)-1].visiblity_status===true)
     console.log("visibleProducts",visibleProducts)

    
    
    if(visibleProducts==""){
        
        return (
            <StyledLandingPage>
        <div>
            <Navbar />
            <p>Hello {name} Products will come here</p>
        </div>
        </StyledLandingPage>
    )
    }
    
    
    else{
       
        return(
            <StyledLandingPage>
            <div>
            <Navbar />
            <p>Welcome {name}</p>
            <div className="product-container" >
             { visibleProducts.map((p) => (
            <Card product={p}/>
             ))}
             </div>
        </div> 
        </StyledLandingPage>
        )
    }
}



export default LandingPage