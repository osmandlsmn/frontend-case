import { Card, CardSection, Container, Group, Image, Rating, Tabs, Text, Title } from "@mantine/core";
import { useParams } from "react-router-dom";

import detailStyle from "@/components/MovieDetail/MovieDetail.module.scss";
import { IconInfoSquareRoundedFilled } from "@tabler/icons-react";

const MovieDetail = () => {
  const { imdbId } = useParams();
  console.log(imdbId);

  return (
    <Container className={detailStyle.container} py="lg" size="xl">
      <Card className={detailStyle.content}>
        <CardSection>
          <Image
            classNames={{ image: detailStyle.image }}
            src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX0.jpg"
            height={500}
            width={500}
          />
        </CardSection>
        <CardSection className={detailStyle.detail_content}>
          <div>
            <Group mb={10} className={detailStyle.header_title}>
              <Title fw={700}>Avengers: Infinifty War</Title>
              <div className={detailStyle.star_count}>
                <Text fw={500} fz="lg">
                  9.1
                </Text>
                <Rating value={1} count={1} size="md" mb={2} />
              </div>
            </Group>
            <Tabs defaultValue="overview">
              <Tabs.List>
                <Tabs.Tab value="overview" icon={<IconInfoSquareRoundedFilled size={20} />}>
                  Overview
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="overview" pt="xs">
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cum mollitia fugiat dolorum nobis saepe animi, atque quaerat culpa iure repellendus quia fugit consectetur
                  corporis ratione! Similique praesentium voluptas nulla ea doloribus at iusto recusandae quas quam hic tempora autem nobis, fuga dolorem adipisci! Praesentium totam itaque architecto
                  ea reprehenderit.
                </Text>
                <Group mt={10}>
                  <div>
                    <Text ta="center" fz="lg" fw={500}>
                      2018
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed">
                      Year
                    </Text>
                  </div>
                  <div>
                    <Text ta="center" fz="lg" fw={500}>
                      2h 23min
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed">
                      Time
                    </Text>
                  </div>
                  <div>
                    <Text ta="center" fz="lg" fw={500}>
                      +16
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed">
                      Year
                    </Text>
                  </div>
                </Group>
              </Tabs.Panel>
            </Tabs>
          </div>
        </CardSection>
      </Card>
    </Container>
  );
};

export default MovieDetail;
