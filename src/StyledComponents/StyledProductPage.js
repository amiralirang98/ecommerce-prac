import styled from "styled-components"

const StyledProductPage =  styled.div`
.product-description-main-container{
    /* background-color: blueviolet; */
    border: 1px solid black;
    border-radius: 10px;
    margin: 2%;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
}
.product-description-image{
    margin-top: 5%;
    margin-bottom: 5%;
    width: 400px;
    height: 400px;
}
.product-description-image-container{
    border-right: 1px solid black;
       text-align: center;
}
.product-description-details-container
{
    padding-left: 2%;
    text-align: left;
}

@media screen and (max-width:500px){
    .product-description-image{
        width: 100px;
        height: 100px;
    }
    .product-description-image-container{
        border: none;
    }
}
@media screen and (max-width:850px){
    .product-description-image{
        width: 300px;
        height: 300px;
    }
}

`
export default StyledProductPage