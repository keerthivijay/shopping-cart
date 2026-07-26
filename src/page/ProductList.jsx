import { useState } from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { useSelector } from 'react-redux';

function ProductList() {
    
    const products = useSelector((state) => state.product.productList);
    
    return (
        <div className="products">
            <h1>Products</h1>
            <div className="product-list">
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;    