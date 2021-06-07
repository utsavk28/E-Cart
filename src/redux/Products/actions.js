import axios from 'axios'
import { GETPRODUCTREQUEST, GETPRODUCTSUCCESS, GETPRODUCTFAILURE } from './actionTypes'

export const getProductRequest = () => {
    return {
        type: GETPRODUCTREQUEST,
    }
}

export const getProductSuccess = (products) => {
    return {
        type: GETPRODUCTSUCCESS,
        payload: products
    }
}

export const getProductFailure = (error) => {
    return {
        type: GETPRODUCTFAILURE,
        error: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(getProductRequest())
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                const products = res.data
                dispatch(getProductSuccess(products))
            })
            .catch(err => {
                dispatch(getProductFailure(err.message))
            })
    }
}