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
      transformResponse: (response) =>
        response.modules.filter((mod) => mod.stories.length > 0),
      providesTags: ["newsLetter"],
    }),
  }),
});

export const { useGetTopicQuery, useGetMarketsQuery } = topicsApi;
