import homeStyles from "@/components/Home/Home.module.scss";
import MoviesSection from "@/components/Home/MovieSection";
import { useGetMoviesForSearchMutation } from "@/store/movie/api";
import { useAppSelector } from "@/utils/hooks";
import { Container } from "@mantine/core";
import { useEffect } from "react";
import useHomeConstants from "./Home.constants";

const Home = () => {
  const { filterValues } = useAppSelector((state) => state.movies);
  const [getMovies] = useGetMoviesForSearchMutation();

  const movieSections = useHomeConstants();

  useEffect(() => {
    getMovies(filterValues);
  }, [filterValues]);

  return (
    <Container className={homeStyles.container} py="lg" size="xl">
      {movieSections.map((section) => (
        <MoviesSection movies={section.data}>
          <MoviesSection.Title>{section.title}</MoviesSection.Title>
          <MoviesSection.Description>{section.description}</MoviesSection.Description>
        </MoviesSection>
      ))}
    </Container>
  );
};

export default Home;
