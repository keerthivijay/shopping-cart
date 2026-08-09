import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import data from "../../data.json"
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { addPaymentInfo, addProductsToOrder, createOrder } from "../store/OrderSlice.jsx";
import { clearCart } from "../store/ProductSlice.jsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validatePaymentOption } from "../utils/formValidators.js";

function PaymentDetails() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartProducts = useSelector((state) => state.product.cartProducts) || [];
    const totalPrice = cartProducts.reduce((total, product) => total + product.price, 0);
    const [payment, setPayment] = useState({});

    const handlePaymentSubmit = (option) => {
        const selPayment = (data.paymentOptions).filter((val) => val.id == option.payment)[0];
        setPayment(selPayment);
        dispatch(addPaymentInfo(selPayment));
        dispatch(addProductsToOrder(cartProducts));
        dispatch(createOrder());
        dispatch(clearCart());

        navigate("/order-success");
    }

    const handleBack = () => {
        navigate('/delivery');
    }

    return (
        <div className="payment-details">
            <progress className="progress-bar" value={0.75} />
            <h1>Payment Details</h1>
            <Formik initialValues={{ payment: "" }} validate={validatePaymentOption} onSubmit={(values) => {
                handlePaymentSubmit(values)
            }}>
                <Form>
                    <fieldset>
                        <div className="payment-options">
                            {data.paymentOptions.map((option) => (
                                <div key={option.id} className="payment-option">
                                    <Field type="radio" id={`payment-${option.id}`} name="payment" value={String(option.id)} />
                                    <label htmlFor={`payment-${option.id}`}>{option.name}</label>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                    <ErrorMessage name="payment" render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
                    <p>Terms & Conditions: Please check the order before making the payment.</p>
                    <div className="payment-buttons">
                        <button className="btn btn-back" type="button" onClick={handleBack}>back</button>
                        <button className="btn btn-payment" type="submit">
                            Proceed to Payment
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default PaymentDetails;