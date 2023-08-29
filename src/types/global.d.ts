export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series";
  Poster: string;
}

export interface IBaseResponse {
  totalResults: string;
  Response: string;
}
