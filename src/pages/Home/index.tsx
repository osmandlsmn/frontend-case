import { Container, Group, SimpleGrid, Text, Title } from "@mantine/core";
import MovieCard from "../../components/Home/MovieCard";
import homeStyles from "../../components/Home/Home.module.scss";
import { useGetMoviesMutation } from "../../store/movie/api";
import { useEffect } from "react";

const Home = () => {
  const [getMovies, { isLoading }] = useGetMoviesMutation();

  useEffect(() => {
    getMovies("");
  }, []);

  return (
    <Container py="lg" size="xl">
      <Group className={homeStyles.header}>
        <Title order={2}>Movies</Title>
        <Text size="sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, temporibus?</Text>
      </Group>
      <SimpleGrid cols={6} breakpoints={[{ maxWidth: "xl", cols: 1 }]}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </SimpleGrid>
    </Container>
  );
};

export default Home;
