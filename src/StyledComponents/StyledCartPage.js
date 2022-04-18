import styled from "styled-components"

const StyledCartPage = styled.div`
.cart-image{
    width: 200px;
    height: 200px;
}
.cart-component-image{
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;
}
.cart-page-component{
    margin-top: 2%;
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
    background-color: #ffff;

}
.inc-dec-buttons{
    /* display: flex;
    justify-content: space-between; */
    float: left;
    /* float: left; */
    margin-top: 5%;
    margin-bottom: 5%;
}
.cart-button{
    border: 1px solid black;
    font-size: 2em;
    width: 30px;
    height: 50px;
    text-align: center;
    padding: 1%;
    padding-bottom: 1.5%;
    border-radius: 10px;
}
.productQuantity{
    border: 1px solid black;
    border-radius: 10px;
    background-color: #aaaa;
    width: 200px;
    height: 50px;
    text-align: center;
    padding-top: 3%;
    margin-top: 10px;
    margin-bottom: 10px;
}
.inc-button:hover{
    background-color: lightgreen;
    color: aliceblue;
}
.dec-button:hover{
    background-color: lightcoral;
    color: aliceblue;
}
.checkout-button-container{
    border: 1px solid black;
    width: 200px;
    height: 25px;
    text-align: center;
    margin-left: 45%;
    margin-top: 2%;
    margin-bottom: 5%;
    border-radius: 5px;
    background-color: #ffff
}
.checkout-button-container:hover{
    background-color: lightgreen;
    color: aliceblue;
}

`
export default StyledCartPage