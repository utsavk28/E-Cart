import axios from 'axios'
import { GETCATEGORYREQUEST, GETCATEGORYSUCCESS, GETCATEGORYFAILURE } from './actionTypes'

export const getCategoryRequest = () => {
    return {
        type: GETCATEGORYREQUEST,
    }
}

export const getCategorySuccess = (category) => {
    return {
        type: GETCATEGORYSUCCESS,
        payload: category
    }
}

export const getCategoryFailure = (error) => {
    return {
        type: GETCATEGORYFAILURE,
        error: error
    }
}

export const fetchCategories = () => {
    return (dispatch) => {
        dispatch(getCategoryRequest())
        axios.get('https://fakestoreapi.com/products/categories')
            .then(res => {
                const categories = res.data
                dispatch(getCategorySuccess(categories))
            })
            .catch(err => {
                dispatch(getCategoryFailure(err.message))
            })
    }
}