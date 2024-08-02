import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    womenproducts: [],
};

export const womenProductsSlice = createSlice({
    name: "womenProducts",
    initialState: INITIAL_STATE,
    reducers: {
        womenproducts: (state) => {
            return state;
        },
        addWomensProducts: (state, action) => {
            return {
                ...state, 
                womenproducts: action.payload,
            }
        }
    },
});

export const { womenproducts, addWomensProducts } = womenProductsSlice.actions;
export default womenProductsSlice.reducer;
