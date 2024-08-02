import { createSlice } from "@reduxjs/toolkit"
import { GenderClothing } from "../../axios/products/genderClothing"

const INITIAL_STATE = {
  maleproducts: await GenderClothing("masculino"),
};

export const maleProductsSlice = createSlice({
  name: 'maleProducts',
  initialState: INITIAL_STATE,
  reducers: {
    maleproducts: state => {
      return state;
    },
  },
});

export const { maleproducts } = maleProductsSlice.actions;
export default maleProductsSlice.reducer;