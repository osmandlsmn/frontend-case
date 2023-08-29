import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../types/global";
import { MovieApi } from "./api";

export interface IMovieState {
  filterValues: {
    type: IMovie["Type"] | "all";
    query: string;
    year: string | null;
  };
  movies: IMovie[];
}

const initialState: IMovieState = {
  movies: [],
  filterValues: {
    type: "all",
    query: "pokemon",
    year: null,
  },
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(MovieApi.endpoints.getMovies.matchFulfilled, (state, action) => {
      state.movies = action.payload.Search;
    });
  },
});

export default MovieSlice.reducer;
// export const {} = MovieSlice.actions;
