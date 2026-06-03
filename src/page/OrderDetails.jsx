import { useParams } from "react-router-dom";

function OrderDetails({ orderList }) {
    const { id } = useParams();
    const orderDetails = orderList.find((order) => order.id === parseInt(id));

    return (
        <>
            <div className="order-details">
                <h1>Order Details</h1>
                <p>Order ID: {orderDetails.id}</p>
                <div className="order-products">
                    <div className="products-header">
                        <span className="col-prod-name">Product name</span>
                        <span className="col-pro-price">Price</span>
                        <span className="col-quantity">Quantity</span>
                        <span className="col-total">Total</span>
                    </div>
                    {orderDetails.cartProducts.map((product) => (
                        <div key={product.id} className="order-product">
                            <span className="col-prod-name">{product.title}</span>
                            <span className="col-pro-price">${product.price.toFixed(2)}</span>
                            <span className="col-quantity">1</span>
                            <span className="col-total">${product.price.toFixed(2)}</span>
                        </div>
                    ))}
                </div>
                <div className="order-total">Total: ${orderDetails.total.toFixed(2)}</div>
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <div>Items: {orderDetails.cartProducts.length}</div>
                <div>Shipping: $5.99</div>
                <div>Tax: $1</div>
                {/* <p>Tax: ${orderDetails.tax.toFixed(2)}</p> */}
            </div>
            <div className="order-delivery">
                <h2>Delivery Information</h2>
                <p>Name: {orderDetails.deliveryInfo.name}</p>
                <p>Address: {orderDetails.deliveryInfo.address}</p>
                <p>Phone: {orderDetails.deliveryInfo.phone}</p>
            </div>
            <div className="order-payment">
                <h2>Payment Information</h2>
                <p>Payment Method: {orderDetails.paymentOption.name}</p>
            </div>
        </>
    );
}

export default OrderDetails;