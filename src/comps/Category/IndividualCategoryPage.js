import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Product/ProductCard';

const IndividualCategoryPage = ({ match }) => {
    const categoryName = match.params.category;
    const {
        product: { products },
    } = useSelector((state) => state);

    return (
        <div className='products-bar'>
            <h3>{categoryName.toUpperCase()}</h3>
            <div className='products-table-container'>
                {products
                    .filter((prod) => prod.category === categoryName)
                    .map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))}
            </div>
        </div>
    );
};

export default IndividualCategoryPage;
