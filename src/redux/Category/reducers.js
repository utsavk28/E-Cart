import { GETCATEGORYREQUEST, GETCATEGORYSUCCESS, GETCATEGORYFAILURE } from './actionTypes'

const initialState = {
    loading: false,
    category: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GETCATEGORYREQUEST:
            return {
                ...state,
                loading: true
            }
        case GETCATEGORYSUCCESS:
            return {
                ...state,
                loading: false,
                category: payload,
                error: '',
            }
        case GETCATEGORYFAILURE:
            return {
                ...state,
                loading: false,
                category: [],
                error: payload,
            }
        default:
            return state
    }
}

export default reducer