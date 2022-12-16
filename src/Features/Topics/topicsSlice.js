import { apiSlice } from "../../Api/apiSlice";

export const topicsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTopic: builder.query({
      query: () => ({
        url: "stories/list?template=CURRENCY&id=usdjpy",
      }),
      providesTags: ["newsLetter"],
    }),
    getNews: builder.query({
      query: () => ({
        url: "news/list?id=market",
      }),
      transformResponse: (response) =>
        response.modules.filter((obj) => obj.id === "pagination_story_list"),
      providesTags: ["newsLetter"],
    }),
    getRegion: builder.query({
      query: () => ({
        url: "news/list-by-region?id=asya",
      }),
      providesTags: ["newsLetter"],
    }),
  }),
});

export const { useGetTopicQuery, useGetNewsQuery, useGetRegionQuery } =
  topicsApi;
