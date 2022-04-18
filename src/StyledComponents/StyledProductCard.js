import styled from "styled-components"

const StyledProductCard = styled.div`
.product-card-container{
    border: 1px solid black;
    padding: 2%;
    border-radius: 10px;
    background-color: #ffff;
}
.product-image{
    width: 200px;
    height: 200px;
}
.product-image-container{
    /* border: 1px solid red; */
    text-align: center;
}
.product-description-container{
    /* border: 1px solid green; */
}
.product-card-buttons{
    /* display: inline; */
     /*border: 1px solid black;*/
}
.left-button{
    float: left;
}
.right-button{
    float: right;
}

.product-button{
    border: 1px solid black;
    padding: 2%;
    border-radius: 5px;
    margin-top: 5%;
    background-color: #ffff;
}
.left-button:hover{
    background-color: skyblue;
    color: aliceblue;
}
.right-button:hover{
    background-color: lightgreen;
    color: aliceblue;
}
.show:hover{
    background-color: lightgreen;
    color: aliceblue;
}
.hide:hover{
    background-color: lightcoral;
    color: aliceblue;
}
`
export default StyledProductCard