import { configureStore } from "@reduxjs/toolkit";

import MovieSlice from "./movie/slice";
import { MovieApi } from "./movie/api";

const store = configureStore({
  reducer: {
    movies: MovieSlice,
    [MovieApi.reducerPath]: MovieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat([MovieApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
