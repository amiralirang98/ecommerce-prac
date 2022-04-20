import styled from "styled-components"

const StyledLoginFile = styled.div`
.login-form-container{
    border: 1px solid black;
    margin-top: 10%;
    margin-left: 25%;
    margin-right: 25%;
    
    text-align: center;
    padding: 2%;
    border-radius: 20px;
    background-color: #ffff;
}
.form-tag-label-container{
text-align: left;
/* border: 1px solid brown; */
margin-top: 2%;
padding-left: 7%;
}
.form-input-field-container{
    margin-top: 2%;
    text-align: left;
    padding-left: 7%;
    /* border: 1px solid green; */
}
.form-field{
    width: 75%;
    height: 25px;
    border-radius: 5px;
}
.login-button{
    border: 1px solid black;
    margin-left: 35%;
    margin-right: 40%;
    /* padding: 0.25%; */
    border-radius: 10px;
    margin-top: 5%;
}
.login-button:hover{
    background-color: lightgreen;
    color: aliceblue;
}

@media screen and (max-width: 800px) {
    .form-input-field-container{
        /* border: 1px solid magenta; */
    
    }
    .login-form-container{
        margin-top: 20%;
        margin-left: 0;
        margin-right: 0;
        border-radius:0;
    }
   
}
@media screen and (max-width: 450px) {
    .form-input-field-container{
        /* border: 1px solid yellow; */
    }

    .login-form-container{
        margin-left: 0;
        margin-right: 0;
        margin-top: 20%;
        border: none; 
    }
}

`
export default StyledLoginFile