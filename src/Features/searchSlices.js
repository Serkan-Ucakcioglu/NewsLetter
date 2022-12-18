import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  debounce: "",
  theme: JSON.parse(localStorage.getItem("theme")) || "light",
};

const searchSlices = createSlice({
  name: "searchSlices",
  initialState,
  reducers: {
    addDebounce: (state, { payload }) => {
      state.debounce = payload;
    },
    themeChange: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
  },
});

export const selectedDebounce = (state) => state.searchSlices.debounce;
export const selectedTheme = (state) => state.searchSlices.theme;
export const { addDebounce, themeChange } = searchSlices.actions;

export default searchSlices.reducer;
