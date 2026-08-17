import { Link } from "react-router";
import { useSelector } from "react-redux";

import DataTable from 'react-data-table-component';


function OrderList() {

    const orders = useSelector((state) => state.order.orderList);
    console.log("OrderList received orders:", orders);

    const columns = [
        { name: 'Order ID', selector: row => row.id, sortable: true, cell: row => (<Link to={`/order-details/${row.id}`}>{row.id}</Link>) },
        { name: 'Total', selector: row => row.total, sortable: true },
        { name: 'Pament Method', selector: row => row.paymentOption.name },
        { name: 'Delivery Address', selector: row => row.deliveryInfo.address }
        ];

    return (
        
        <>
            <h1>Orders List</h1>
            <p>This is where the order list will be displayed.</p>

            <DataTable columns={columns} data={orders} pagination />

            {/* <div className="order-list">
                <div className="order-list-header">
                    <span>Order ID</span>
                    <span>Total</span>
                    <span>Payment Method</span>
                    <span>Delivery Address</span>
                </div>
                {orders.length == 0 ? <div className="no-item">No Orders found!</div> : (
                    orders.map((order) => (
                        <div key={order.id} className="order-item">
                            <span><Link to={`/order-details/${order.id}`}>{order.id}</Link></span>
                            <span>${order.total.toFixed(2)}</span>
                            <span>{order.paymentOption.name}</span>
                            <span>{order.deliveryInfo.address}</span>
                        </div>
                    ))
                )}
            </div>
            <div className="order-list-mb">
                {orders.length == 0 ? <div className="no-item">No Orders found!</div> : (
                    orders.map((order) => (
                        <div key={order.id} className="order-item-mb">
                            <span className="order-id-mb"><Link to={`/order-details/${order.id}`}>{order.id}</Link></span><br />
                            <span className="total-mb">${order.total.toFixed(2)}</span><br />
                            <span className="payment-mb">{order.paymentOption.name}</span><br />
                            <span className="del-addr-mb">{order.deliveryInfo.address}</span>
                        </div>
                    ))
                )}
            </div> */}
        </>
    );
}

export default OrderList;