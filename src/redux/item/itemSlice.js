import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  item: null,
};

export const itemSlice = createSlice({
  name: 'item',
  initialState: INITIAL_STATE,
  reducers: {
    itemSelected: (state,action) => {
      return {
        ...state, item: action.payload,
        };
      }
    },
  },
);

export const { itemSelected } = itemSlice.actions;
export default itemSlice.reducer;