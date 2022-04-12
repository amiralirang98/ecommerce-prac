import {combineReducers} from 'redux'
import { productReducer } from './prodreducers'

const reducers =  combineReducers({
    allProducts :productReducer,
})
export default reducers