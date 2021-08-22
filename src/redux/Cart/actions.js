import { ADDITEMS, GETITEMS,CLEARCART } from './actionTypes';

export const addItem = (product, quantity) => (dispatch) => {
    dispatch({
        type: ADDITEMS,
        payload: {
            quantity,
            product,
        },
    });
};

export const getItem = () => (dispatch) => {
    dispatch({
        type: GETITEMS,
    });
};

export const clearCart = () => (dispatch) => {
    dispatch({
        type: CLEARCART,
    })
}