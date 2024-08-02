import { createSlice } from "@reduxjs/toolkit"
import { GenderClothing } from "../../axios/products/genderClothing";

const INITIAL_STATE = {
  womenproducts: await GenderClothing("femenino"),
};

export const womenProductsSlice = createSlice({
  name: 'womenProducts',
  initialState: INITIAL_STATE,
  reducers: {
    womenproducts: state => {
      return state;
    },
  },
});

export const { womenproducts } = womenProductsSlice.actions;
export default womenProductsSlice.reducer;