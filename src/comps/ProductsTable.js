import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const ProductsTable = () => {
    const { product: { products } } = useSelector(state => state)

    return (
        <div className="products-bar" >
            <h3>Products to Shop from</h3>
            <div className="products-table-container">
                {products.slice(0, 10).map((product, index) => <ProductCard product={product} key={index} />)}
            </div>
        </div>
    )
}

export default ProductsTable
