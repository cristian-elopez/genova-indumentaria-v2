import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  products: [],
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