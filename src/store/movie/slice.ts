import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../types/global";
import { MovieApi } from "./api";
import { IMoviesFilter } from "./interface";

export interface IMovieState {
  isLoading: boolean;
  filterValues: IMoviesFilter;
  movies: {
    [key: string]: IMovie[];
  };
}

const initialState: IMovieState = {
  isLoading: true,
  movies: {},
  filterValues: {
    type: "all",
    query: "pokemon",
    year: null,
  },
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setFilterValues: (state, action) => {
      state.filterValues = { ...state.filterValues, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(MovieApi.endpoints.getMoviesForSearch.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(MovieApi.endpoints.getMoviesForSearch.matchFulfilled, (state, action) => {
      state.movies = {};
      action.payload.Search.forEach((movie) => {
        const type = movie.Type;
        if (!state.movies[type]) {
          state.movies[type] = [];
        }
        state.movies[type].push(movie);
      });
      state.isLoading = false;
    });
  },
});

export default MovieSlice.reducer;
export const { setFilterValues } = MovieSlice.actions;
