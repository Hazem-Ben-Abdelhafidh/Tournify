import { apiSlice } from "../api/apiSlice";
import { Tournament, tournaments } from "./types";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTournaments: builder.query<tournaments, void>({
      query: () => ({
        url: "/tournaments",
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

export const { useGetTournamentsQuery, useAddNewTournamentMutation } =
  extendedApiSlice;
