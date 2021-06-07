import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { addItem } from '../redux/Cart/actions';
import { useDispatch } from 'react-redux'

const ProductPage = ({ match }) => {
    const dispatch = useDispatch()
    const { product: { products } } = useSelector(state => state)
    const [prod, setProd] = useState(null)
    const [amount, setAmount] = useState(1)

    useEffect(() => {
        setProd(...products.filter((product => product.id.toString() === match.params.id
        )))
    }, [products, match.params.id])

    const btnClick = (e) => {
        var target = e.target.name
        if (target === "decrease")
            setAmount(amount - 1);
        else if (target === "increase")
            setAmount(amount + 1)
    }

    return (
        <>
            { prod && <div className="product-page-container">
                <div className="left-item-container" >
                    <div className="product-detail" >
                        <div className="category" >
                            <small>{prod.category.toUpperCase()}</small>
                        </div>
                        <h2>
                            {prod.title}
                        </h2>
                        <h4>$ {prod.price}</h4>
                        <div className="button-grp" >
                            <div className="btn-group" role="group">
                                <button name="decrease" disabled={amount < 1} type="button" className="btn btn-outline-dark" onClick={btnClick} >-</button>
                                <button type="button" disabled className="btn btn-outline-dark">{amount}</button>
                                <button name="increase" type="button" className="btn btn-outline-dark" onClick={btnClick} >+</button>
                            </div>
                            <div className="add-cart">
                                <button type="button" onClick={() => {
                                    dispatch(addItem(prod, amount))
                                }} className="btn btn-dark" >ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-panel" >
                    <img src={prod.image} alt="" />
                </div>
                <div className="right-item-container" >
                    <div className="desc" >
                        <h5>PRODUCT DESCRIPTION</h5>
                        {prod.description}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ProductPage
