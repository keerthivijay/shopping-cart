import { useState } from "react";
import { useParams } from "react-router";   
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Reviews from "../components/Reviews";
import Tags from "../components/Tags";
import StarRating from "../components/StarRating";

function ProductDetails({ products, addToCart }) {
    const { id } = useParams();

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const { title, price, images } = product;

    console.log(product);

    return (
        <>
            <div className="product-details">
                <div className="product-pirmary-info">
                    <div className="product-images">
                    {images.map((image,index) => (
                        <img className="product-image" id="{title}-{index}" key={index} src={image} alt={title} />
                    ))}
                    </div>
                    <div className="product-basic-info">
                        <h1>{product.title}</h1>
                        <div className="product-overall-rating" >Rating: <StarRating rating={product.rating} /> ({product.rating}/5)</div>
                        
                        {/* <span className="star">&#9733;</span> */}
                        <Tags tags={product.tags} />
                        <p><b>Price:</b> ${product.price.toFixed(2)}</p>
                        <p><b>Availability:</b> {product.availabilityStatus}</p>
                        <button className="btn btn-add-cart" onClick={() => addToCart({ id, title, price })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <p><b>Description:</b><br/> {product.description}</p>
                <p>Return Policy: {product.returnPolicy}</p>
                <p>Warranty: {product.warrantyInformation}</p>
                <Reviews reviews={product.reviews} />
            </div>
        </>
    );
}

export default ProductDetails;