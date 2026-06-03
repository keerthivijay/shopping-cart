import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./OrdeSlice";

export const store = configureStore({
    reducer: {
        order: orderReducer
    }
});
