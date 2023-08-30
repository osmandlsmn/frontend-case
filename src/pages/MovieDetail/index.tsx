import MovieDetailLoader from "@/components/MovieDetail/MovieDetail.Loader";
import detailStyle from "@/components/MovieDetail/MovieDetail.module.scss";
import { useGetMovieByIdMutation } from "@/store/movie/api";
import { Badge, Card, CardSection, Container, Group, Image, Rating, Tabs, Text, Title } from "@mantine/core";
import { IconInfoSquareRoundedFilled } from "@tabler/icons-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { imdbId } = useParams() as { imdbId: string };
  const [getMovieById, { data: movie, isLoading, status }] = useGetMovieByIdMutation();

  const computedGenres = movie?.Genre?.split(",");

  useEffect(() => {
    if (status === "fulfilled" && movie?.Response === "False") navigate("/");
  }, [movie, status]);

  useEffect(() => {
    getMovieById({ id: imdbId });
  }, [imdbId]);

  return (
    <Container className={detailStyle.container} py="lg" size="xl">
      {isLoading ? (
        <MovieDetailLoader />
      ) : (
        <Card className={detailStyle.content}>
          <CardSection>
            <Image classNames={{ image: detailStyle.image }} src={movie?.Poster} height={500} width={500} />
          </CardSection>
          <CardSection className={detailStyle.detail_content}>
            <div>
              <Group mb={10} className={detailStyle.header_title}>
                <Title fw={700} w="90%" maw="90%">
                  {movie?.Title}
                </Title>
                <div className={detailStyle.star_count}>
                  <Text fw={500} fz="lg">
                    9.1
                  </Text>
                  <Rating value={1} count={1} size="md" mb={2} />
                </div>
              </Group>
              <Group mb={10}>
                <div style={{ display: "flex", gap: 5 }}>
                  <Text fz="sm" c="gray">
                    Time:
                  </Text>
                  <Text fz="sm">{movie?.Runtime}</Text>
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                  <Text fz="sm" c="gray">
                    Year:
                  </Text>
                  <Text fz="sm">{movie?.Year}</Text>
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                  <Text fz="sm" c="gray">
                    Language:
                  </Text>
                  <Text fz="sm">{movie?.Language}</Text>
                </div>
              </Group>
              <Group mb={10}>
                {computedGenres?.map((genre, index) => (
                  <Badge radius="sm" key={index}>
                    {genre}
                  </Badge>
                ))}
              </Group>
              <Tabs defaultValue="overview">
                <Tabs.List>
                  <Tabs.Tab value="overview" icon={<IconInfoSquareRoundedFilled size={20} />}>
                    Overview
                  </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="overview" pt="xs">
                  <Text>{movie?.Plot}</Text>
                </Tabs.Panel>
              </Tabs>
            </div>
          </CardSection>
        </Card>
      )}
    </Container>
  );
};

export default MovieDetail;
