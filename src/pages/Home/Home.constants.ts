import { IMovie } from "@/types/global";
import { useAppSelector } from "@/utils/hooks";

export interface IMovieSection {
  title: string;
  description: string;
  data: IMovie[];
}

const useHomeConstants = (): IMovieSection[] => {
  const { movie, series, episode } = useAppSelector((state) => state.movies.movies);

  return [
    {
      title: "Movies",
      description: "This section contains information related to movies",
      data: movie,
    },
    {
      title: "Series",
      description: "This section includes details about TV series",
      data: series,
    },
    {
      title: "Episode",
      description: "This section provides information about individual episodes of TV shows.",
      data: episode,
    },
  ];
};

export default useHomeConstants;
