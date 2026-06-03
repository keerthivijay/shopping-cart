function OrderSuccessWidget({ orderDetails }) {
    console.log(orderDetails);
    return (
        <div className="order-success-widget">
            <h1>Order Details</h1>
            <p>Order ID: {orderDetails.id}</p>
                <div className="order-products">
                    {orderDetails.cartProducts.map((product) => (
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