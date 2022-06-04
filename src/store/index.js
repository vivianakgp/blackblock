import { configureStore } from "@reduxjs/toolkit";
import productRequest from "./slices/productRequest.slice";
export default configureStore({
  reducer: {
    productRequest,
  },
});
