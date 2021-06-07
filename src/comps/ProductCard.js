import React from 'react'
import { Link } from 'react-router-dom'
import { addItem } from '../redux/Cart/actions';
import { useDispatch } from 'react-redux'

const ProductCard = ({ product }) => {
    const { id, title, price, image, category } = product;
    const dispatch = useDispatch()

    return (
        <div className="show-card">

            <div className="show-image">
                <Link to={`/category/${category}/${id}`} >

                    <img src={image} alt={title} />
                </Link>

            </div>
            <div className="show-info">
                <Link to={`/category/${category}/${id}`} >
                    <h5>{title}</h5>
                </Link>
                <h6 className="price" >${price}</h6>
            </div>

            <p><button className="product-card-button" onClick={() => {
                dispatch(addItem(product))
            }} >Add to Cart</button></p>
        </div>
    )
}

export default ProductCard
