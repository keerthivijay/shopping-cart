import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function OrderFailure() {
    return (
        <>
            <div className="order-failure">
                <h1>Order Failed</h1>
                <p>Unfortunately, there was an issue processing your order. Please try again later.</p>
            </div>
        </>
    );
}

export default OrderFailure;