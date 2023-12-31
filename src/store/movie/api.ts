import { IDetailMovie } from "@/types/global";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetMovieById, IGetMovies, IMoviesFilter } from "./interface";

export const MovieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_OMDB_URL }),
  endpoints: (builder) => ({
    getMoviesForSearch: builder.mutation<IGetMovies, IMoviesFilter>({
      query: ({ query, year, type }) => ({
        url: `?apikey=486c38b4&s=${query}${year ? `&y=${year.getFullYear()}` : ""}${type !== "all" ? `&type=${type}` : ""}`,
        method: "GET",
      }),
    }),
    getMovieById: builder.mutation<IDetailMovie, IGetMovieById>({
      query: ({ id }) => ({
        url: `?apikey=486c38b4&s&i=${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMoviesForSearchMutation, useGetMovieByIdMutation } = MovieApi;
