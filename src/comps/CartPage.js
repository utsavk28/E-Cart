import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartCard from './CartCard'

const CartPage = () => {
    const { cart: { products } } = useSelector(state => state)
    const [totalAmt, setTotalAmt] = useState(0)

    useEffect(() => {
        if (Object.keys(products).length !== 0)
            setTotalAmt(Object.keys(products).map(key => {
                const { quantity, product } = products[key];
                console.log(quantity * product.price);
                return quantity * product.price
            }).reduce((a, b) => a + b))
    }, [products])

    return (
        <div>
            { Object.keys(products).length === 0 ? 'Cart is Empty'  : <table id="myTable" className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th align="right"><span id="amount" className="amount">Amount</span> </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(products) && Object.keys(products).map(key => {
                        const productObj = products[key];
                        return <CartCard key={productObj.product.id} product={productObj.product} quantity={productObj.quantity} />;
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4"></td>
                        <td align="right"><strong>TOTAL = $ <span id="total" className="total">{totalAmt}</span></strong></td>
                    </tr>
                </tfoot>
            </table>}
        </div>
    )
}

export default CartPage
