import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {

    return (
        <Link to={"category/" + category}>
            <div className="category-container-item" >
                <span>{category.toUpperCase()}</span>
            </div>
        </Link>
    )
}

export default CategoryCard
