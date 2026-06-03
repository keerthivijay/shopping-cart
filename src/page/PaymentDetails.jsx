import { Link } from "react-router";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function PaymentDetails({ paymentOptions, addPaymentOption }) {
    return (
        <>
            <div className="payment-details">
                <progress className="progress-bar" value={0.75} />
                <h1>Payment Details</h1>
                <div className="payment-options">
                    {paymentOptions.map((option) => (
                        <div key={option.id} className="payment-option">
                            <input type="radio" id={option.id} name="payment" value={option.id} onChange={() => addPaymentOption(option.id)} />
                            <label htmlFor={option.id}>{option.name}</label>
                        </div>
                    ))}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc varius commodo. Sed at ligula a enim efficitur tincidunt.</p>
                <div className="payment-buttons">
                    <Link to="/delivery">
                        <button className="btn btn-back">back</button>
                    </Link>
                    <Link to="/order-success">
                        <button className="btn btn-payment">Proceed to Payment</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PaymentDetails;