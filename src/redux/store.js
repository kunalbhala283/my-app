
import { combineReducers } from 'redux'
import { productReducer, selectedProductReducer,addToCartReducer } from './reducers/productReducer'



const rootReducer=combineReducers({
    allProducts:productReducer,
    product: selectedProductReducer,
    cart:addToCartReducer
})

export default rootReducer