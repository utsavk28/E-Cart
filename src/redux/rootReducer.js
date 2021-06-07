import { combineReducers } from 'redux'
import categoryReducer from './Category/reducers'
import productsReducer from './Products/reducers'
import cartReducer from './Cart/reducers'

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer,
    cart:cartReducer
})

export default rootReducer