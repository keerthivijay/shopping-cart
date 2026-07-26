import { useState, useMemo } from 'react';
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../components/Modal';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { removeCartProduct, clearCart } from '../store/ProductSlice';

function CartDetails() {

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.product.cartProducts) || [];
    const totalPrice = useMemo(() => cartProducts.reduce((total, product) => total + product.price, 0), [cartProducts]);

    function handleCheckout() {

        if(cartProducts.length === 0) {
            setOpen(true);
        } else {
            navigate("/delivery");
        }
    }

    return (
        <>
        <div className="cart-details">
            <div className="cart-header">
                <h1>Shopping Cart</h1>
                <div className="cart-buttons">
                    <button className='btn btn-checkout' onClick={handleCheckout}>Checkout</button>
                    <button className='btn btn-clear' onClick={() => dispatch(clearCart())}>Clear</button>
                </div>
            </div>

            <div className="cart-items">
                {!cartProducts || cartProducts.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartProducts.map((product, index) => (
                        <div key={index} className="cart-item">
                            <img src="./src/assets/hero.png" alt={product.title} />
                            <p>{product.title}</p>
                            <p>${product.price.toFixed(2)}</p>
                            <button className="btn btn-danger" onClick={() => dispatch(removeCartProduct(product.id))}>
                            Remove
                            </button>
                        </div>)
                    )
                )}
            </div>

            <div className="cart-total">
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
            </div>
            <Modal open={open} setOpen={setOpen} message="Cart is empty!" />
        </div>
        </>
    );
}

export default CartDetails;