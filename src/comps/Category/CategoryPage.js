import React from 'react';
import CategoryShowCase from './CategoryShowCase';
import ProductsTable from '../Product/ProductsTable';

const CategoryPage = () => {
    return (
        <div>
            <CategoryShowCase />
            <ProductsTable />
        </div>
    );
};

export default CategoryPage;
