import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  debounce: "",
};

const searchSlices = createSlice({
  name: "searchSlices",
  initialState,
  reducers: {
    addDebounce: (state, { payload }) => {
      state.debounce = payload;
    },
  },
});

export const selectedDebounce = (state) => state.searchSlices.debounce;
export const { addDebounce } = searchSlices.actions;

export default searchSlices.reducer;
