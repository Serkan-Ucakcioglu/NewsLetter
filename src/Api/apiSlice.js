import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuerys = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_MY_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  prepareHeaders: (headers) => {
    const token = import.meta.env.VITE_MY_API_KEY;
    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQuerys,
  tagTypes: ["newsLetter"],
  endpoints: () => ({}),
});
