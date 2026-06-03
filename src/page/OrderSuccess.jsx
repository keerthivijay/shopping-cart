import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import OrderDetails from "./OrderDetails";
import OrderSuccessWidget from "../components/OrderSuccessWidget";

function OrderSuccess({orderDetails}) {
    console.log(orderDetails);
    return (
        <>
            <div className="order-success">
                <h1>Thank you for your order!</h1>
                <p>Your order has been placed successfully. We will notify you once it is shipped.</p>
            </div>
            <OrderSuccessWidget orderDetails={orderDetails} />
        </>
    );
}

export default OrderSuccess;