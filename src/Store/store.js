import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Api/apiSlice";
import searchSlices from "../Features/searchSlices";

const store = configureStore({
  reducer: {
    searchSlices,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
