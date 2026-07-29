import {useState} from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import data from "../../data.json"
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { addPaymentInfo, addProductsToOrder, createOrder } from "../store/OrderSlice.jsx";
import { clearCart } from "../store/ProductSlice.jsx";

function PaymentDetails() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartProducts = useSelector((state) => state.product.cartProducts) || [];
    const totalPrice = cartProducts.reduce((total, product) => total + product.price, 0);
    const [payment, setPayment] = useState({});

    const handlePaymentSubmit = (option) => {
        dispatch(addPaymentInfo(option));
        dispatch(addProductsToOrder(cartProducts));
        dispatch(createOrder());
        dispatch(clearCart());
        
        navigate("/order-success");
    }

    return (
        <div className="payment-details">
            <progress className="progress-bar" value={0.75} />
            <h1>Payment Details</h1>
            <div className="payment-options">
                {data.paymentOptions.map((option) => (
                    <div key={option.id} className="payment-option">
                        <input type="radio" id={option.id} name="payment" value={option.id} onChange={() => setPayment(option)} />
                        <label htmlFor={option.id}>{option.name}</label>
                    </div>
                ))}
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc varius commodo. Sed at ligula a enim efficitur tincidunt.</p>
            <div className="payment-buttons">
                <Link to="/delivery">
                    <button className="btn btn-back">back</button>
                </Link>
                <button className="btn btn-payment" onClick={() => handlePaymentSubmit(payment)}>
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
}

export default PaymentDetails;