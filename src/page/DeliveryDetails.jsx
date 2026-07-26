import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import data from "../../data.json"
import { addDeliveryInfo } from "../store/OrderSlice.jsx";
import { validateDelivery } from "../utils/formValidators.js";

function DeliveryDetails() {
    const { name, address, phone } = data.deliveryInfo;
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <>
            <div className="delivery-details">
                <progress className="progress-bar" value={0.5} />
                <h1>Delivery Details</h1>
                <Formik
                    initialValues={{ name, address, phone }}
                    enableReinitialize
                    validate={validateDelivery}
                    onSubmit={(values) => {
                        dispatch(addDeliveryInfo(values));
                        navigate("/payment");
                    }}
                >
                    <Form className="delivery-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <Field type="text" id="name" name="name" innerRef={inputRef} />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" className="form-label">Address:</label>
                            <Field type="text" id="address" name="address" />
                            <ErrorMessage name="address" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Phone:</label>
                            <Field type="text" id="phone" name="phone" />
                            <ErrorMessage name="phone" component="div" className="error" />
                        </div>
                        <button type="submit" className="btn btn-cnf-delivery">Confirm Delivery</button>
                    </Form>
                </Formik>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc varius commodo. Sed at ligula a enim efficitur tincidunt.</p>
            </div>
        </>
    );
}

export default DeliveryDetails;