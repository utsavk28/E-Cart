import { ADDITEMREQUEST } from './actionTypes'

const initialState = {
    products: {}
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    const { products } = state;
    switch (type) {
        case ADDITEMREQUEST:
            return {
                ...state,
                products: {
                    ...products,
                    [payload.product.id]: {
                        quantity: payload.quantity,
                        product: payload.product
                    }
                }
            }
        default:
            return state
    }
}

export default reducer