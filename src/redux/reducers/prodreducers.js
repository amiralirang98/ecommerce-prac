import { actionTypes } from "../constants/action-types"

const initialstate = {
    counter:0,
    product:[],
    visiblity_status:[]
}
export const productReducer = (state=initialstate,action) => {
    switch(action.type){
        case actionTypes.SET_PRODUTS:
            return {...state,product:action.payload}
        case actionTypes.SET_COUNTER:
            return state.counter
        case actionTypes.SET_STATUS:
            return {...state,visiblity_status:action.payload}
        default:
            return state
    }
}