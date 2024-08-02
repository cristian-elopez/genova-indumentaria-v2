import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    toggleMenu: true,
};

export const menuSlice = createSlice({
    name: "menu",
    initialState: INITIAL_STATE,
    reducers: {
        setToggleMenu: (state) => {
            return {
                ...state,
                toggleMenu: !state.toggleMenu,
            };
        },
    },
});

export const { setToggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
    