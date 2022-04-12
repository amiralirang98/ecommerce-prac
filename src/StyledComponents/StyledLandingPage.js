import styled from "styled-components"

const StyledLandingPage = styled.div`
.product-container{
    /* background-color: aqua; */
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
    grid-gap: 2em;
}
@media screen  and (max-width: 400px) {
    .product-container{
        /* background-color: aqua; */
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
        
    }
}
`

export default StyledLandingPage