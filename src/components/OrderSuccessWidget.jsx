import { useSelector } from "react-redux";
import  "../store/OrderSlice.jsx";

function OrderSuccessWidget() {
    const orderDetails = useSelector((state) => state.order.orderDetails);
    console.log(orderDetails);
    return (
        <div className="order-success-widget">
            <h1>Order Details</h1>
            <p>Order Date:{orderDetails.date} Order ID: {orderDetails.id}</p>
            <div className="order-detail-primary">
                <div className="order-delivery">
                    <h2>Delivery Information</h2>
                    <p>Name: {orderDetails.deliveryInfo.name}</p>
                    <p>Address: {orderDetails.deliveryInfo.address}</p>
                    <p>Phone: {orderDetails.deliveryInfo.phone}</p>
                </div>
                <div className="order-payment">
                    <h2>Payment Mode</h2>
                    <p>{orderDetails.paymentOption.name}</p>
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div>Items: {orderDetails.products.length}</div>
                    <div>Shipping: $5.99</div>
                    <div>Tax: $1</div>
                    <p>Total: ${orderDetails.total.toFixed(2)}</p>
                    {/* <p>Tax: ${orderDetails.tax.toFixed(2)}</p> */}
                </div>
            </div>
            <div className="order-product-delivery-info">
                {orderDetails.products.map((product) => (
                    <div className="order-product-info"><img src={product.thumbnail} /><span className="product-name">{product.title}</span><span className="delivery-date">{product.shippingInformation}</span></div>
                ))}
            </div>
        </div>
    );
}

export default OrderSuccessWidget;