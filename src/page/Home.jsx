import { Suspense } from "react";
import ProductsWidget from "../components/ProductsWidget";
import { Link } from "react-router";

function Home() {

  return (
    <>
        {/* <div className="home">
            <h1>Welcome to the Shopping Cart!</h1>
            <p>Browse our products and add them to your cart.</p>
        </div> */}
        <Suspense fallback={<div>Loading products...</div>}>
            <Link to={"/products"}>
              <img src="./src/assets/banner.jpg" alt="banner image" width={"1200px"} height={"550px"} />
            </Link>
            <ProductsWidget />
        </Suspense>
    </>
    
  );
}

export default Home;