import { createSlice } from "@reduxjs/toolkit"
import { AllProducts } from "../../axios/products/allProducts"

const INITIAL_STATE = {
  products: await AllProducts(true),
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    products: state => {
      return state;
    },
  },
});

export const { products } = productsSlice.actions;
export default productsSlice.reducer;