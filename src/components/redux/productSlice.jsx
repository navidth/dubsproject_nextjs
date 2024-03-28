import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataProducts = createAsyncThunk(
  "Product/fetchData",
  async () => {
    const responeProduct = await fetch("https://data-json-six.vercel.app/products", {
      cache: "no-cache",
    });
    if (!responeProduct.ok) {
      throw error("not fetching");
    }
    let data = await responeProduct.json();
    return data;
  }
);

const initialState = {
  posts: [],
  products: [],
  sum: [],
  errors: false,
  allTotal: null,
  taxPost: 45000,
};

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let isInCart = state.products.some((el) => el.id === action.payload.id);
      const { id, operation } = action.payload;
      const productToUpdate = state.products.find((el) => el.id === id);
      if (isInCart) {
        productToUpdate.operation = operation;
        productToUpdate.quantity += Number(operation);
        productToUpdate.totalPirce = productToUpdate.price * productToUpdate.quantity;

        if (productToUpdate.quantity === 0) {
          productToUpdate.IsYetInCart = false;
          let index = state.products.findIndex((el) => el.id === id);
          state.products.splice(index, 1);
        }
      } else {
        state.products.push(action.payload);
      }
      let sum = state.products.reduce((acc, items) => acc + items.totalPirce, 0);
      state.sum = sum.toFixed(2);
      state.allTotal = Number(state.sum) + Number(state.taxPost);
    },
    removeToCart: (state, action) => {
      let isInCart = state.products.some((el) => el.id === action.payload.id);
      if (isInCart) {
        let index = state.products.findIndex(
          (el) => el.id === action.payload.id
        );
        state.products.splice(index, 1);
      }
      let sum = state.products.reduce(
        (acc, items) => acc + items.totalPirce,
        0
      );
      state.sum = sum.toFixed(2);
      state.allTotal = Number(state.sum) + Number(state.taxPost);
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

export const { addToCart, removeToCart } = productSlice.actions;
export default productSlice.reducer;
