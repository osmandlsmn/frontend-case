import { IMovie } from "@/types/global";
import { useAppSelector } from "@/utils/hooks";

export interface IMovieSection {
  title: string;
  description: string;
  data: IMovie[];
}

const useHomeConstants = (): IMovieSection[] => {
  const { movie, series } = useAppSelector((state) => state.movies.movies);

  return [
    {
      title: "Movies",
      description: "lorem",
      data: movie,
    },
    {
      title: "Series",
      description: "lorem",
      data: series,
    },
  ];
};

export default useHomeConstants;
