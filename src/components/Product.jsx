import { Link } from "react-router";

function Product({ id, title, price, thumbnail, addToCart }) {

    return (
        <div className="product">
            <Link to={`/product/${id}`}>
                 <img src={thumbnail} alt={name} />
            </Link>
            <p className="product-title">{title}</p>
            <p>${price.toFixed(2)}</p>
            <button className="btn btn-addcart" onClick={() => addToCart({ id, title, price })}>
                Add to Cart
            </button>
        </div>
    );
}

export default Product;