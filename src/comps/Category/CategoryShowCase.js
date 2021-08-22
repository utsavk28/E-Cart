import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from './CategoryCard'

const CategoryShowCase = () => {
    const { category: { category } } = useSelector(state => state)

    return (
        <div className="category-show-case" >
            <h3>Shop by Category</h3>
            <div className="category-container" >
                {category.map((cat,index) => <CategoryCard category={cat} key={index} />)}
            </div>
        </div>
    )
}

export default CategoryShowCase
