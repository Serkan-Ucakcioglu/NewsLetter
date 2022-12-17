import { apiSlice } from "../../Api/apiSlice";

export const searchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearchs: builder.query({
      query: (searchText) => ({
        url: `market/auto-complete?query=${searchText}`,
      }),
      invalidatesTags: ["newsLetter"],
    }),
  }),
});

export const selectUsersResult = apiSlice.endpoints.getSearchs.select();

export const { useGetSearchsQuery } = searchApi;
