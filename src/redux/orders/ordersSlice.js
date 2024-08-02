import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  orders: null,
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: INITIAL_STATE,
  reducers: {
    addOrders: (state,action) => {
      return {
        ...state, 
        orders: action.payload,
      }
    },
    clearOrders: (state) => {
      return {
        ...state,
        orders: null,
      }
    }
  },
});

export const { addOrders,clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;