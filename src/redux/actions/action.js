import { actionTypes } from "../constants/action-types"
export const setCounter = (counter) => {
    return{
        type:actionTypes.SET_COUNTER,
        payload: counter
    }
} 
export const setProduct = (products) => {
    return{
        type:actionTypes.SET_PRODUTS,
        payload:products
    }
}
export const setStatus = (status) => {
    return{
        type:actionTypes.SET_STATUS,
        payload:status
    }
}
export const setCartNum = (cartNum) => {
    return{
        type: actionTypes.SET_CART_NUM,
        payload: cartNum
    }   
}
export const setCart = (cart) => {
    return{
        type:actionTypes.SET_CART,
        payload:cart
    }
}