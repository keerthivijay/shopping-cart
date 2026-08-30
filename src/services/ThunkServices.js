import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk(
  'products/fetchData',
  async () => {
    const response = await fetch(`http://localhost:5173/data.json`);//https://dummyjson.com/products
    console.log('thunk response');
    return await response.json();
  }
);