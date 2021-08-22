import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/Cart/actions';
import CartCard from './CartCard';

const CartPage = () => {
    const dispatch = useDispatch();
    const {
        cart: { products },
    } = useSelector((state) => state);
    const [totalAmt, setTotalAmt] = useState(0);

    useEffect(() => {
        if (Object.keys(products).length !== 0)
            setTotalAmt(
                Object.keys(products)
                    .map((key) => {
                        const { quantity, product } = products[key];
                        console.log(quantity * product.price);
                        return quantity * product.price;
                    })
                    .reduce((a, b) => a + b)
            );
    }, [products]);

    return (
        <div>
            {Object.keys(products).length === 0 ? (
                'Cart is Empty'
            ) : (
                <Fragment>
                    <table id='myTable' className='table'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th align='right'>
                                    <span id='amount' className='amount'>
                                        Amount
                                    </span>{' '}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(products) &&
                                Object.keys(products).map((key) => {
                                    const productObj = products[key];
                                    return (
                                        <CartCard
                                            key={productObj.product.id}
                                            product={productObj.product}
                                            quantity={productObj.quantity}
                                        />
                                    );
                                })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan='4'></td>
                                <td align='right'>
                                    <strong>
                                        TOTAL = ${' '}
                                        <span id='total' className='total'>
                                            {totalAmt}
                                        </span>
                                    </strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className='float-end '>
                        <button
                            className='btn btn-danger m-2'
                            onClick={() => {
                                dispatch(clearCart());
                            }}
                        >
                            Clear Cart
                        </button>
                        <button className='btn btn-success my-2'>
                            CheckOut
                        </button>
                    </div>
                </Fragment>
            )}
        </div>
    );
};

export default CartPage;
