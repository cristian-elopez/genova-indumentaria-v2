import { createSlice } from "@reduxjs/toolkit"
import { 
    addItemToCart,
    removeitemToCart, 
    resetShippingCost
} from "./cartActions"

const INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
  cartSubtotal: 0,
};
const SHIPPING_COST = 5000;

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state,action) => {
        return {
            ...state, 
            cartItems: addItemToCart(state.cartItems,action.payload),
            shippingCost: SHIPPING_COST
        };
    },
    removeToCart: (state,action) => {
        return {
            ...state, 
            cartItems: removeitemToCart(state.cartItems,action.payload),
            shippingCost: resetShippingCost(state.cartItems,SHIPPING_COST)
        };
    },
    clearCart: (state) => {
        return {
            ...state, 
            cartItems: [],
            shippingCost: 0
        }
    },
    addSubtotal: (state,action) => {
        return {
            ...state, 
            cartSubtotal: action.payload
        }
    }}
});

export const { addToCart,removeToCart,clearCart,addSubtotal } = cartSlice.actions;
export default cartSlice.reducer;