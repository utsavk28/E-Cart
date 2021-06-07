import React from 'react'
import { Link } from 'react-router-dom'
const ShowCard = ({ prod }) => {
    const { id, title, price, image, category } = prod
    return (
        <div className="show-card">
            <div className="show-image">
                <Link to={`/category/${category}/${id}`}>
                    <img src={image} alt={title} />
                </Link>
            </div>
            <div className="show-info">
                <Link to={`/category/${category}/${id}`}>
                    <h5>{title}</h5>
                </Link>
                <h6>${price}</h6>
            </div>
        </div>
    )
}

export default ShowCard
