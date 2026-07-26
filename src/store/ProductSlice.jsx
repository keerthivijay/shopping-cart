import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productList: [],
        productDetails: null,
        cartProducts: [],
        cartCount: 0
    },
    reducers: {
        setProducts: (state, action) => {
            state.productList = action.payload;
        },
        setCartProducts: (state, action) => {
            const productId = action.payload;
            const product = state.productList.find(p => p.id === productId);
            if (product) {
                state.cartProducts.push(product);
                state.cartCount += 1;
            }
        },
        removeCartProduct: (state, action) => {
            const productId = action.payload;
            if (state.cartProducts) {
                state.cartProducts = state.cartProducts.filter(p => p.id !== productId);
                state.cartCount -= 1;
            }
        },
        clearCart: (state) => {
            state.cartProducts = [];
            state.cartCount = 0;
        },
        cartProducts: (state) => {
            return state.cartProducts;
        }
    }
})

export const { setProducts, setCartProducts, removeCartProduct, clearCart, cartProducts } = productSlice.actions;
export default productSlice.reducer;