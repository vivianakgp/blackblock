import { createSlice } from "@reduxjs/toolkit";
// file JSON
const Data = require("../../data.json");

export const requestSlice = createSlice({
  name: "productRequests",
  initialState: Data.productRequests,
  reducers: {
    setEspecificValue: (state, action) => {
      // Recibimos la accion por parámetros
      return action.payload; // Colocamos la propiedad payload
    },
  },
});
export const { setEspecificValue } = requestSlice.actions;
export default requestSlice.reducer;
