// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/product-reducers";

const store = configureStore({
  reducer: {
    Product: productReducer,
  },
});

export default store;
