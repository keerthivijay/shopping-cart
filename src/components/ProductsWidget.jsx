import { Suspense, useState, useEffect } from "react";
import { useErrorBoundary } from 'react-error-boundary';
import { useSelector } from "react-redux";
import Product from "./Product";

function ProductsWidget() {
    //const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const { showBoundary } = useErrorBoundary();
    const products = useSelector((state) => state.product.productList);

    return (
        <div className="products-container">
            <div className="products">
                {/* <BuggyComponent /> */}
                {products.length === 0 ? (
                    <p>No products available.</p>
                ) : (
                    products.map((product) => (
                        <Product key={product.id} {...product} />
                    ))
                )}
            </div>
        </div>
    );
}

const BuggyComponent = () => {
  // Throws an error immediately upon rendering
  throw new Error("I crashed!");
  return <div>This will never render.</div>;
};

export default ProductsWidget;