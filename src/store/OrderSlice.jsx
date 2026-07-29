import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orderList: [],
        orderDetails: {
            id: Date.now(),
            products: [],
            deliveryInfo: {},
            paymentOption: {},
            total: 0
        }
    },
    reducers: {
        createOrder: (state, action) => {
            state.orderList.push(state.orderDetails);
        },
        addDeliveryInfo: (state, action) => {
            state.orderDetails.deliveryInfo = action.payload;
        },
        addPaymentInfo: (state, action) => {
            state.orderDetails.paymentOption = action.payload;
        },
        addProductsToOrder: (state, action) => {
            state.orderDetails.products = action.payload;
            state.orderDetails.total = action.payload.reduce((total, product) => total + product.total, 0);
        }
    }
});

export const { createOrder, addDeliveryInfo, addPaymentInfo, addProductsToOrder } = orderSlice.actions;
export default orderSlice.reducer;