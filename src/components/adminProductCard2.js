import React from "react"
import StyledProductCard from "../StyledComponents/StyledProductCard"
class AdminProductCard2 extends React.Component{
    constructor(props){
        super(props)
        this.showfunc = this.showfunc.bind(this)
        this.hidefunc = this.hidefunc.bind(this)
        // this.sethide = this.sethide.bind(this)
        // this.setunhide = this.setunhide.bind(this)
    }
    state= {
        isVisible : this.props.visible
    }

    // sethide = () =>{
    //     this.setState({isHidden:true})
    //     console.log("in hide func")
    // }

    // setunhide = () => {
    //     this.setState({isHidden:false})
    //     console.log("in unhide func")
    // }

    

    showfunc = () => {
        var visiblity = JSON.parse(localStorage.getItem("visiblity"))
         var p =  visiblity.find(p => p.id === this.props.product.id)
         p.visiblity_status =true
         this.setState({isVisible:true})
         localStorage.setItem("visiblity",JSON.stringify(visiblity))
    }
    hidefunc = () => {
        var visiblity = JSON.parse(localStorage.getItem("visiblity"))
         var p =  visiblity.find(p => p.id === this.props.product.id)
         p.visiblity_status =false
         this.setState({isVisible:false})
         localStorage.setItem("visiblity",JSON.stringify(visiblity))
    }
    render()
    {
        console.log(this.props.visible)
        // var isVisible = JSON.parse(localStorage.getItem("visiblity"))
        // if(isVisible[(this.props.product.id)-1].visiblity_status){
            // this.setState({
            //     isHidden:false
            // })
            // console.log("in setstate")
            // console.log(isVisible[(this.props.product.id)-1].visiblity_status)
            // this.setunhide

        // }
        // else
        // {
        //     this.sethide
        // }
      //  }
        
        return(
            <StyledProductCard>
            <div className="product-card-container">              
            <div className="product-image-container">
            <img src={this.props.product.image} className="product-image"/>
            </div>
            <div className="product-description-container">
            <p>{this.props.product.price}</p>
            <p>{this.props.product.title}</p>
            </div>
            <div className="product-card-buttons">
            
            <div className="product-button left-button show" onClick={this.showfunc}>
                
            <span>Show</span>
            </div>
            <div className="product-button right-button hide" onClick={this.hidefunc}>
                
            <span>{this.state.isVisible ? "Hide":"Hidden"}</span>
            </div>
            </div>
        </div>
        </StyledProductCard>
        )
    }
}

export default AdminProductCard2