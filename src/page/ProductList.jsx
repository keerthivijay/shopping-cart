import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import ProductFilters from '../components/ProductFilters';

function ProductList() {

    const products = useSelector((state) => state.product.productList);
    const [finalProducts, setFinalProducts] = useState(products);

    useEffect(() => {
        setFinalProducts([...products]);
    }, [products]);
    
    return (
        <>
        <div><h1>Products</h1></div>
        <div className="products">
            <ProductFilters products={products} setFinalProducts={setFinalProducts} />
            <div className="product-list">
                {finalProducts.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
        </>
    );
}

export default ProductList;    