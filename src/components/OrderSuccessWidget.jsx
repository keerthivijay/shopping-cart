import { useSelector } from "react-redux";
import { orderDetails } from "../store/OrderSlice.jsx";

function OrderSuccessWidget() {
    const orderDetails = useSelector((state) => state.order.orderDetails);
    console.log(orderDetails);
    return (
        <div className="order-success-widget">
            <h1>Order Details</h1>
            <p>Order ID: {orderDetails.id}</p>
                <div className="order-products">
                    {orderDetails.products.map((product) => (
                        <div key={product.id} className="order-product">
                            <p>{product.title}</p>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                <p>Total: ${orderDetails.total.toFixed(2)}</p>
        </div>
    );
}

export default OrderSuccessWidget;