import { Suspense } from "react";
import ProductsWidget from "../components/ProductsWidget";

function Home() {

  return (
    <>
        <div className="home">
            <h1>Welcome to the Shopping Cart!</h1>
            <p>Browse our products and add them to your cart.</p>
        </div>
        <Suspense fallback={<div>Loading products...</div>}>
            <ProductsWidget />
        </Suspense>
    </>
    
  );
}

export default Home;