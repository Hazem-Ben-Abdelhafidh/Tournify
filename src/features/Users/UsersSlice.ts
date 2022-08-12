import { apiSlice } from "../api/apiSlice";
import { User, Data } from "./types";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<User, Omit<Data, "id" | "Role" | "name">>({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body: body,
      }),
    }),
    signup: builder.mutation<User, Omit<Data, "id" | "Role">>({
      query: (body) => ({
        url: "/users/signup",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = extendedApiSlice;
