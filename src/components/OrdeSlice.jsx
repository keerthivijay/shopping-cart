import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orderList: [],
        orderDetails: null
    },
    reducers: {
        createOrder: (state, action) => {
            state.orderList.push(action.payload);
        },
    }
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;