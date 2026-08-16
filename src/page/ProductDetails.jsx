import { useState } from "react";
import { useParams } from "react-router";   
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Reviews from "../components/Reviews";
import Tags from "../components/Tags";
import StarRating from "../components/StarRating";
import { useSelector, useDispatch } from "react-redux";
import { setCartProducts } from "../store/ProductSlice.jsx";

function ProductDetails() {

    const { id } = useParams();
    const products = useSelector((state) => state.product.productList);
    const dispatch = useDispatch();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const { title, price, images } = product;

    console.log(product);

    return (
        <div className="product-details">
            <div className="product-pirmary-info">
                <div className="product-images">
                {images.map((image,index) => (
                    <img className="product-image" id="{title}-{index}" key={index} src={image} alt={title} />
                ))}
                </div>
                <div className="product-basic-info">
                    <h3>{product.title}</h3>
                    <div className="product-overall-rating" >Rating: <StarRating rating={product.rating} /> ({product.rating}/5)</div>
                    
                    {/* <span className="star">&#9733;</span> */}
                    {/* <Tags tags={product.tags} /> */}
                    <p><b>Price:</b> ${product.price.toFixed(2)}</p>
                    <p><b>Availability:</b> {product.availabilityStatus}</p>
                    <p><b>Delivery:</b> {product.shippingInformation}</p>
                    <button className="btn btn-add-cart" onClick={() => dispatch(setCartProducts(product.id))}>
                        Add to Cart
                    </button>
                </div>
            </div>
            <h2>All details</h2>
            <p><b>Description:</b> {product.description}</p>
            <p><b>Return Policy:</b> {product.returnPolicy}</p>
            <p><b>Warranty:</b> {product.warrantyInformation}</p>
            <Reviews reviews={product.reviews} />
        </div>
    );
}

export default ProductDetails;