import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./MenuSlice";

const Store = configureStore({
  reducer: {
    menu: dataReducer,
  },
});
export default Store;
