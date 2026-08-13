import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { setCartProducts } from "../store/ProductSlice.jsx";

function Product({ id, title, price, thumbnail }) {
    
    const dispatch = useDispatch();

    return (
        <div className="product">
            <Link to={`/product/${id}`}>
                 <img src={thumbnail} alt={title} />
            </Link>
            <span className="product-title">{title}</span>
            <span>${price.toFixed(2)}</span>
            <button className="btn btn-addcart" onClick={() => dispatch(setCartProducts(id))}>
                Add to Cart
            </button>
        </div>
    );
}

export default Product;