import { apiSlice } from "../../Api/apiSlice";

export const searchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearchs: builder.query({
      query: (searchText) => ({
        url: `market/auto-complete?query=${searchText}`,
      }),
      transformResponse: (response) =>
        response?.news?.map((news) => news).flat(),
      invalidatesTags: ["newsLetter"],
    }),
  }),
});

export const selectUsersResult = apiSlice.endpoints.getSearchs.select();
export const { useGetSearchsQuery } = searchApi;
