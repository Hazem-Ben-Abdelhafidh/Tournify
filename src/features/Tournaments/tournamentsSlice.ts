import { apiSlice } from "../api/apiSlice";
import { Data } from "../Users/types";
import { SearchResults, Tournament, tournaments } from "./types";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTournaments: builder.query<tournaments, void>({
      query: () => ({
        url: "/tournaments",
        method: "GET",
      }),
    }),
    search: builder.query<SearchResults, string>({
      query: (args) => ({
        url: `/tournaments/search/?search=${args}`,
        method: "GET",
      }),
    }),
    addNewTournament: builder.mutation({
      query: (body) => ({
        url: "/tournaments",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetTournamentsQuery,
  useSearchQuery,
  useAddNewTournamentMutation,
} = extendedApiSlice;
