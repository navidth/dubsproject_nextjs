import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataProducts = createAsyncThunk("Product/fetchData", async () => {
  const responeProduct = await fetch("http://localhost:4000/products", {
    cache: "no-cache",
  });
  if (!responeProduct.ok) {
    throw error("not fetching");
  }
  let data = await responeProduct.json();
  return data;
});

const initialState = {
  posts: [],
  errors: false,
  allTotal: null,
};

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataProducts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.errors = false;
      })
      .addCase(getDataProducts.pending, (state) => {
        state.errors = false;
      })
      .addCase(getDataProducts.rejected, (state) => {
        state.errors = true;
      });
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
