import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from '../config/apiClient'

export const fetchProductsData = createAsyncThunk(
  'products/fetchData',
  async () => {
    const response = await apiClient.get(`products`);
    return response;
  }
);