import { IBaseResponse, IMovie } from "../../types/global";

export interface IGetMovies extends IBaseResponse {
  Search: IMovie[];
}

export interface ITest {
  username: string;
  test: number;
}

export interface IMoviesFilter {
  type: IMovie["Type"] | "all";
  query: string;
  year: string | null;
}

export interface IGetMovieById {
  id: string;
}
