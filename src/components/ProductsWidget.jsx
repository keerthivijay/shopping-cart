import { Suspense, useState, useEffect } from "react";
import { useErrorBoundary } from 'react-error-boundary';
import { useSelector } from "react-redux";
import Product from "./Product";
import ProductsSlider from "./ProductsSlider";

function ProductsWidget() {
    //const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const { showBoundary } = useErrorBoundary();
    const products = useSelector((state) => state.product.productList);
    const productGroups = Object.groupBy(products, item => item.category);

    return (
        <div className="products-container">
            {Object.keys(productGroups).map(category =>
                (<ProductsSlider key={category} products={productGroups[category]} title={category} />)
            )}
        </div>
    );
}

const BuggyComponent = () => {
    // Throws an error immediately upon rendering
    throw new Error("I crashed!");
    return <div>This will never render.</div>;
};

export default ProductsWidget;