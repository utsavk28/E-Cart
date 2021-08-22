import React from 'react'

const CartCard = ({ quantity, product }) => {
    const {  title, price,image } = product
    return (
        <tr>
            <td>
                <div className="product-img">
                    <div className="img-prdct"><img src={image} alt={title} /></div>
                </div>
            </td>
            <td>
                {/* <p>{title.slice(0,25) + (title[21] && '....')}</p> */}
                <p>{title}</p>
            </td>
            <td>
                <div className="button-container">
                    <span>{quantity}</span>
                </div>
            </td>
            <td>
                <span>$ {price}</span>
            </td>
            <td align="right" >$ <span id="amount" className="amount">{quantity*price}</span></td>
        </tr>
    )
}

export default CartCard
