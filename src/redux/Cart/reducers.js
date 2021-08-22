import { ADDITEMS, GETITEMS, CLEARCART } from './actionTypes';

const initialState = {
    products: {},
};

var prods;

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    const { products } = state;
    switch (type) {
        case ADDITEMS:
            prods = {
                products: {
                    ...products,
                    [payload.product.id]: {
                        quantity: products[payload.product.id]
                            ? products[payload.product.id].quantity +
                              payload.quantity
                            : payload.quantity,
                        product: payload.product,
                    },
                },
            };
            localStorage.setItem('cart', JSON.stringify(prods));
            return prods;
        case GETITEMS:
            prods = localStorage.getItem('cart');
            return prods
                ? JSON.parse(prods)
                : {
                      products: {},
                  };
        case CLEARCART:
            localStorage.removeItem('cart');
            return {
                products: {},
            };
        default:
            return state;
    }
};

export default reducer;
