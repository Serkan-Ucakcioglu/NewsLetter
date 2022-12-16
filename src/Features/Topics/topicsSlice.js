import { apiSlice } from "../../Api/apiSlice";

export const topicsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTopic: builder.query({
      query: () => ({
        url: "stories/list?template=CURRENCY&id=usdjpy",
      }),
      transformResponse: (response) =>
        response?.stories.map((news) => news).flat(),
      providesTags: ["newsLetter"],
    }),
    getNews: builder.query({
      query: () => ({
        url: "news/list?id=market",
      }),
      transformResponse: (response) =>
        response.modules
          .filter((obj) => obj.id === "pagination_story_list")
          .map((obj) => obj?.stories)
          .flat(),
      providesTags: ["newsLetter"],
    }),
    getRegion: builder.query({
      query: () => ({
        url: "news/list-by-region?id=asya",
      }),
      transformResponse: (response) =>
        response?.modules?.map((obj) => obj.stories).flat(),
      providesTags: ["newsLetter"],
    }),
    getDetails: builder.query({
      query: (id) => ({
        url: `stories/detail?internalID=${id}`,
      }),
      providesTags: ["newsLetter"],
    }),
  }),
});

export const {
  useGetTopicQuery,
  useGetNewsQuery,
  useGetRegionQuery,
  useGetDetailsQuery,
} = topicsApi;
