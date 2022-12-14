import { apiSlice } from "../../Api/apiSlice";

export const topicsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTopic: builder.query({
      query: () => ({
        url: "stories/list?template=CURRENCY&id=usdjpy",
      }),
      providesTags: ["newsLetter"],
    }),
    getMarkets: builder.query({
      query: () => ({
        url: "news/list?id=market",
      }),
      providesTags: ["newsLetter"],
    }),
  }),
});

export const { useGetTopicQuery, useGetMarketsQuery } = topicsApi;
