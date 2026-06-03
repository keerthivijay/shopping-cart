import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";

function DeliveryDetails({ deliveryInfo, addDeliveryInfo }) {
    const { name, address, phone } = deliveryInfo;
    const inputRef = useRef(null);

    const [deliveryDetails, setDeliveryDetails] = useState({
        name: name,
        address: address,
        phone: phone
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setDeliveryDetails((prevDetails) => ({
            ...prevDetails,
            [id]: value
        }));
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            console.log("Input field focused on component mount.",inputRef.current);
        }
    }, []);

    return (
        <>
        <div className="delivery-details">
            <progress className="progress-bar" value={0.5} />
            <h1>Delivery Details</h1>
            <form className="delivery-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" id="name" onChange={handleInputChange} ref={inputRef} value={deliveryDetails.name}  />
                </div>
                <div className="form-group">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input type="text" id="address" onChange={handleInputChange} value={deliveryDetails.address}  />
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input type="text" id="phone" onChange={handleInputChange} value={deliveryDetails.phone}  />
                </div>
            </form>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc varius commodo. Sed at ligula a enim efficitur tincidunt.</p>
            
            <Link to="/payment">
                <button className="btn btn-cnf-delivery" onClick={() => addDeliveryInfo(deliveryDetails)}>Confirm Delivery</button>
            </Link>
        </div>
        </>
    );
}

export default DeliveryDetails;