import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProd = createAsyncThunk("productSlice/fetchProd", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json()
  return data // this is action.payload
});

export const productSlice = createSlice({
  initialState: [],
  name: "productSlice", // this is action.type
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProd.fulfilled, (state,action) => {
      return action.payload
    });
  },
});

export default productSlice.reducer