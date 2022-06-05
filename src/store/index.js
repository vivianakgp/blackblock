import { configureStore } from "@reduxjs/toolkit";
import productRequests from "./slices/productRequest.slice";
export default configureStore({
  reducer: {
    productRequests,
  },
});
