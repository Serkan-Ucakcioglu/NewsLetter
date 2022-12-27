import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuerys = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_MY_API_URL,
  prepareHeaders: (headers) => {
    const token = import.meta.env.VITE_MY_API_KEY;
    if (token) {
      return headers.set("X-RapidAPI-Key", `${token}`);
    }
  },
});
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQuerys,
  tagTypes: ["newsLetter"],
  endpoints: () => ({}),
});
