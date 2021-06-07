import { GETPRODUCTREQUEST, GETPRODUCTSUCCESS, GETPRODUCTFAILURE } from './actionTypes'

const initialState = {
    loading: false,
    products: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GETPRODUCTREQUEST:
            return {
                ...state,
                loading: true
            }
        case GETPRODUCTSUCCESS:
            return {
                ...state,
                loading: false,
                products: payload,
                error: ''
            }
        case GETPRODUCTFAILURE:
            return {
                ...state,
                loading: false,
                products: [],
                error: payload
            }
        default:
            return state;
    }
}

export default reducer