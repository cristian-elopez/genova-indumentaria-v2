import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: INITIAL_STATE,
  reducers: {
    toggleTheme: (state) => {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    },
  },
});

export const { theme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
