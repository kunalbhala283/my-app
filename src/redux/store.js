
import { combineReducers } from 'redux'
import { productReducer } from './reducers/productReducer'



const rootReducer=combineReducers({
    allProducts:productReducer
})

export default rootReducer