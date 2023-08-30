import { Group, Paper, SimpleGrid, Text, Title } from "@mantine/core";
import MovieCard from "../MovieCard";

import { IMovie } from "@/types/global";
import { PropsWithChildren } from "react";
import homeStyles from "../Home.module.scss";
import { useAppSelector } from "@/utils/hooks";
import MovieSectionLoader from "./MovieSection.loader";

const MoviesSection = ({ children, movies }: PropsWithChildren<{ movies: IMovie[] }>) => {
  const { isLoading } = useAppSelector((state) => state.movies);
  if (!movies || movies?.length <= 0) return;

  return (
    <Paper>
      <Group className={homeStyles.header}>{children}</Group>
      <SimpleGrid cols={6} breakpoints={[{ maxWidth: "xl", cols: 4 }]}>
        {isLoading ? <MovieSectionLoader /> : movies.map((movie, index) => <MovieCard {...movie} key={index} />)}
      </SimpleGrid>
    </Paper>
  );
};

MoviesSection.Title = ({ children }: PropsWithChildren) => <Title order={2}>{children}</Title>;
MoviesSection.Description = ({ children }: PropsWithChildren) => <Text size="sm">{children}</Text>;

export default MoviesSection;
