import { ADDITEMREQUEST } from './actionTypes'

export const addItemRequest = (product,quantity=1) => {
    return {
        type: ADDITEMREQUEST,
        payload: {
            quantity,
            product
        }
    }
}

export const addItem = (quantity, product) => {
    return (dispatch) => {
        dispatch(addItemRequest(quantity, product))
    }
}