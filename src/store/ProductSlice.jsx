import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsData } from "../services/ThunkServices";

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
                const cartProduct = state.cartProducts.find(p => p.id === productId);

                if (cartProduct) {
                    cartProduct.quantity += 1;
                    cartProduct.total = cartProduct.price * cartProduct.quantity;
                } else {
                    product.quantity = 1;
                    product.total = product.price;
                    state.cartProducts.push({ ...product });
                    state.cartCount += 1;
                }
                
            }
        },
        removeCartProduct: (state, action) => {
            const productId = action.payload;
            if (state.cartProducts) {
                state.cartProducts = state.cartProducts.filter(p => p.id !== productId);
                state.cartCount -= 1;
            }
        },
        setCartProductQty: (state, action) => {
            const { productId, quantity } = action.payload;

            if (state.cartProducts) {
                const cartProduct = state.cartProducts.find(p => p.id === productId);

                if (cartProduct) {
                    cartProduct.quantity = quantity;
                    cartProduct.total = cartProduct.price * quantity;
                }
            }
        },
        clearCart: (state) => {
            state.cartProducts = [];
            state.cartCount = 0;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchProductsData.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(fetchProductsData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            console.log('thunk response extra reducer');
            state.productList = action.payload.products;
        })
    }
})

export const { setProducts, setCartProducts, removeCartProduct, clearCart, setCartProductQty } = productSlice.actions;
export default productSlice.reducer;