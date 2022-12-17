import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  debounce: JSON.parse(sessionStorage.getItem("search")) || "",
};

const searchSlices = createSlice({
  name: "searchSlices",
  initialState,
  reducers: {
    addDebounce: (state, { payload }) => {
      state.debounce = payload;
      sessionStorage.setItem("search", JSON.stringify(payload));
    },
  },
});

export const selectedDebounce = (state) => state.searchSlices.debounce;
export const { addDebounce } = searchSlices.actions;

export default searchSlices.reducer;
