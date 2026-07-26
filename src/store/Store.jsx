import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./OrderSlice";
import userReducer from "./UserSlice";
import productReducer from "./ProductSlice";

export const store = configureStore({
    reducer: {
        order: orderReducer,
        user: userReducer,
        product: productReducer
    }
});
