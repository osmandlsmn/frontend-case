import { Paper, Text, Title } from "@mantine/core";
import cardStyle from "./MovieCard.module.scss";

const MovieCard = () => {
  return (
    <Paper className={cardStyle.card}>
      <div className={cardStyle.image_container}>
        <img className={cardStyle.image} src="https://www.omdbapi.com/src/poster.jpg" alt="" />
      </div>
      <div className={cardStyle.info}>
        <Title className={cardStyle.title}>Hot Skull</Title>
        <Text className={cardStyle.release_date}>2023</Text>
      </div>
    </Paper>
  );
};

export default MovieCard;
