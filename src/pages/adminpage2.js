import React,{Component} from "react"
import {connect} from "react-redux"
import Navbar from "../components/Navbar"
import AdminProductCard2 from "../components/adminProductCard2"
import StyledLandingPage from "../StyledComponents/StyledLandingPage"

class Adminpage2 extends Component {
    constructor()
    {
        super()
    //     const products =  useSelector((state) => state.allProducts.product)
    // console.log("from admin",products)
    } 
    
    render(){
        var isVisible = JSON.parse(localStorage.getItem("visiblity"))
        console.log('visiblity from adminpage2',isVisible[0])
        var prod = this.props.products
        if(prod==""){
            return (
            <StyledLandingPage>
            <div>
                <Navbar />
                <p>Hello Products will come here</p>
            </div>
            </StyledLandingPage>
        )
        }
        else{
       
            return(
                <StyledLandingPage>
                <div>
                <Navbar />
                <p>Welcome {isVisible[0].id} </p>
                <div className="product-container">
                 { prod.map((p) => (
                <AdminProductCard2 product={p} visible={isVisible[p.id-1].visiblity_status}/>
                 ))}
                 </div>
            </div> 
            </StyledLandingPage>
            )
        }
    }
}
const mapStateToProps = state => {
  const products=state.allProducts.product
  return {products}
}


export default connect(mapStateToProps)(Adminpage2)