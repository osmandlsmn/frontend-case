import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetMovies, IGetMoviesRequest } from "./interface";

export const MovieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_OMDB_URL }),
  endpoints: (builder) => ({
    getMovies: builder.mutation<IGetMovies, IGetMoviesRequest>({
      query: ({ query }) => ({
        url: `?apikey=486c38b4&s=${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMoviesMutation } = MovieApi;
