import Product from "./Product";
import { Suspense, useState, useEffect } from "react";
import { useErrorBoundary } from 'react-error-boundary';

function ProductsWidget({ addToCart }) {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const { showBoundary } = useErrorBoundary();

    const [data, setData] = useState({
    paymentOptions: [],
    deliveryInfo : {
        name: "",
        address: "",
        phone: ""
    },
    products: []
    });
        
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:5173/data.json');
                const jsonData = await response.json();
                console.log("Fetched data:", jsonData);
                setData(jsonData);

                const productsJSON = await fetch('https://dummyjson.com/products')
                .then(res => res.json());
                setData(prev => ({...prev, 
                    ["products"] : productsJSON.products
                }));
            } catch (error) {
                showBoundary(error);
                console.error("Error fetching data:", error);
            }
        })();
    }, []);
    

    return (
        <div className="products-container">
            <div className="products">
                {/* <BuggyComponent /> */}
                {data.products.length === 0 ? (
                    <p>No products available.</p>
                ) : (
                    data.products.map((product) => (
                        <Product key={product.id} {...product} addToCart={addToCart} />
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