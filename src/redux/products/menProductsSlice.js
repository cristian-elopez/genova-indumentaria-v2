import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    maleproducts: [],
};

export const maleProductsSlice = createSlice({
    name: "maleProducts",
    initialState: INITIAL_STATE,
    reducers: {
        maleproducts: (state) => {
            return state;
        },
        addMensProducts: (state, action) => {
            return {
                ...state,
                maleproducts: action.payload,
            };
        },
    },
});

export const { maleproducts, addMensProducts } = maleProductsSlice.actions;
export default maleProductsSlice.reducer;
