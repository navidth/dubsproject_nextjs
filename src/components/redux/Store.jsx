import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./MenuSlice";
import dataProduct from "./productSlice"
const Store = configureStore({
  reducer: {
    menu: dataReducer,
    products: dataProduct
  },
});
export default Store;
