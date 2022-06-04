import { createSlice } from "@reduxjs/toolkit";

const data = JSON.parse(localStorage.getItem("data"));
export const requestSlice = createSlice({
  name: "productRequest",
  initialState: data.productRequests,
  reducers: {
    //   filterstatus:(state)=>{
    //       return  state.filter((request) => request.status === "suggestion");
    //   },
  },
});
// export const { filterstatus } = requestSlice.actions
export default requestSlice.reducer;
