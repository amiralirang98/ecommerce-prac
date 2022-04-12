import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import StyledProductPage from "../StyledComponents/StyledProductPage";

const ProductPage = () => {
    const prod = useSelector((state) => state.allProducts.product);
    console.log("products",prod[0])
    var {id} = useParams()
    var selectedProduct= prod.filter((p) => p.id==parseInt(id))
    console.log("se",selectedProduct[0])
    return(
        <StyledProductPage>
        <div>
            <Navbar />
            <div className="product-description-main-container">
            <div className="product-description-image-container">
            <img src={selectedProduct[0].image} className="product-description-image" />
            </div>
            <div className="product-description-details-container">
            <h2>Name: {selectedProduct[0].title}</h2>
            <h2>Price: ${selectedProduct[0].price}</h2>
            <h2>Description: {selectedProduct[0].description}</h2>
            <h2>Category: {selectedProduct[0].category}</h2>
            <h2>Rating: {selectedProduct[0].rating.rate}</h2>
            </div>
            </div>
        </div>
        </StyledProductPage>
    )
}
export default ProductPage