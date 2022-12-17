import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Api/apiSlice";
import searchSlice from "../Features/searchSlice";

const store = configureStore({
  reducer: {
    searchSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
