import { IMovie } from "@/types/global";
import { Paper, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import cardStyle from "./MovieCard.module.scss";

const MovieCard = ({ Title: MovieTitle, Poster, Year, imdbID }: IMovie) => {
  const navigate = useNavigate();

  const handleDetailPage = () => {
    void navigate("/detail/" + imdbID);
  };

  return (
    <Paper className={cardStyle.card} onClick={handleDetailPage}>
      <div className={cardStyle.image_container}>
        <img className={cardStyle.image} src={Poster} alt="" />
      </div>
      <div className={cardStyle.info}>
        <Title className={cardStyle.title}>{MovieTitle}</Title>
        <Text className={cardStyle.release_date}>{Year}</Text>
      </div>
    </Paper>
  );
};

export default MovieCard;
