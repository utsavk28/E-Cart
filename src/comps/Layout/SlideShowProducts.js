import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Product/ShowCard';

const SlideShowProducts = () => {
    const {
        product: { products },
    } = useSelector((state) => state);
    const testarr = [1, 7, 13, 17, 20];
    const prods = products.filter((prod) => testarr.includes(prod.id));

    return (
        <div className='show-case-bar'>
            <h3>Top Sellers</h3>
            <div className='show-case-container'>
                {prods.map((prod, index) => (
                    <Card prod={prod} key={index} />
                ))}
            </div>
        </div>
    );
};

export default SlideShowProducts;
