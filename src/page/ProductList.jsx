import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import ProductFilters from '../components/ProductFilters';
import ProductSort from '../components/ProductSort';

function ProductList() {

    const products = useSelector((state) => state.product.productList);
    const [finalProducts, setFinalProducts] = useState(products);

    useEffect(() => {
        setFinalProducts([...products]);
    }, [products]);
    
    return (
        <>
        <div className='productslist-bar'><h1>Products</h1>
            <ProductSort products={finalProducts} setFinalProducts={setFinalProducts} />
        </div>
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