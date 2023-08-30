import homeStyles from "@/components/Home/Home.module.scss";
import MoviesSection from "@/components/Home/MovieSection";
import { useGetMoviesForSearchMutation } from "@/store/movie/api";
import { useAppSelector } from "@/utils/hooks";
import { Container, Group, Text, Title } from "@mantine/core";
import { Fragment, useEffect } from "react";
import useHomeConstants from "./Home.constants";

const Home = () => {
  const { filterValues, movies, isLoading } = useAppSelector((state) => state.movies);
  const [getMovies] = useGetMoviesForSearchMutation();

  const movieSections = useHomeConstants();

  useEffect(() => {
    getMovies(filterValues);
  }, [filterValues]);

  const computedNotFound = !isLoading && !movies.series && !movies.movie && !movies.episode;

  return (
    <Container className={homeStyles.container} py="lg" size="xl">
      {computedNotFound ? (
        <Home.NotFound />
      ) : (
        <Fragment>
          {movieSections.map((section, index) => (
            <MoviesSection key={index} movies={section.data}>
              <MoviesSection.Title>{section.title}</MoviesSection.Title>
              <MoviesSection.Description>{section.description}</MoviesSection.Description>
            </MoviesSection>
          ))}
        </Fragment>
      )}
    </Container>
  );
};

Home.NotFound = () => {
  const { query } = useAppSelector((state) => state.movies.filterValues);

  return (
    <Group className={homeStyles.not_found}>
      <Title>No results found for {query}</Title>
      <Text color="dimmed" size="lg" align="center">
        Please try again or search for another movie.
      </Text>
    </Group>
  );
};

export default Home;
