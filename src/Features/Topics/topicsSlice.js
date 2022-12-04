import { apiSlice } from "../../Api/apiSlice";
export const topicsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTopic: builder.query({
      query: () => ({
        url: "top-headlines?country=us",
        method: "GET",
      }),
      providesTags: ["newsLetter"],
    }),
  }),
});

export const { useGetTopicQuery } = topicsApi;
