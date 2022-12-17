import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  debounce: "",
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    addDebounce: (state, { payload }) => {
      state.debounce = payload;
    },
  },
});

export const selectedDebounce = (state) => state.searchSlice.debounce;
export const { addDebounce } = searchSlice.actions;

export default searchSlice.reducer;
