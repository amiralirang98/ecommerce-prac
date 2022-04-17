import { actionTypes } from "../constants/action-types"

const initialstate = {
    counter:0,
    product:[],
    visiblity_status:[],
    cartNum:0,
    cart:[]
}
export const productReducer = (state=initialstate,action) => {
    switch(action.type){
        case actionTypes.SET_PRODUTS:
            return {...state,product:action.payload}
        case actionTypes.SET_COUNTER:
            return state.counter
        case actionTypes.SET_STATUS:
            return {...state,visiblity_status:action.payload}
        case actionTypes.SET_CART_NUM:
            return{...state,cartNum:action.payload}
        case actionTypes.SET_CART:
            return{...state,cart:action.payload}
        default:
            return state
    }
}