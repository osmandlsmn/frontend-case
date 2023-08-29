import { IBaseResponse, IMovie } from "../../types/global";

export interface IGetMovies extends IBaseResponse {
  Search: IMovie[];
}

export interface IGetMoviesRequest {
  query: string;
}
