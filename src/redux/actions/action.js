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