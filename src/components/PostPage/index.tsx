import { Container, Grid, Rating, Typography } from "@mui/material";
import video from "../../assets/videos/backgroundSingIn.mp4";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { CommentSection } from "../ComentSection";

const comments = [
  { id: 1, author: "João", content: "Ótimo post!" },
  { id: 2, author: "Maria", content: "Adorei ler isso!" },
  { id: 3, author: "Maria", content: "Adorei ler isso!" },
  { id: 4, author: "Maria", content: "Adorei ler isso!" },
  {
    id: 5,
    author: "Carlos",
    content:
      "Muito informativo. asd comentario grande o suficiente para preencher todos os caracteres",
  },
  {
    id: 6,
    author: "Carlos",
    content:
      "Muito informativo. asd comentario grande o suficiente para preencher todos os caracteres",
  },
  {
    id: 7,
    author: "Carlos",
    content:
      "Muito informativo. asd comentario grande o suficiente para preencher todos os caracteres",
  },
  {
    id: 8,
    author: "Carlos",
    content:
      "Muito informativo. asd comentario grande o suficiente para preencher todos os caracteres",
  },
];

export const PostPage = () => {
  const [value, setValue] = useState<number | null>(1);
  return (
    <Container sx={{backgroundColor: "black"}}>
      <Typography sx={{ fontWeight: 700, paddingTop: 3 }}>
        Título do vídeo
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8} marginTop={1}>
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 700,
              color: "purple",
            }}
          >
            Avaliação do post
          </Typography>
          <Rating
            sx={{
              marginBottom: 1,
            }}
            size="medium"
            emptyIcon={
              <StarIcon style={{ color: "lightgray" }} fontSize="inherit" />
            }
            name="rating-post"
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
          />

          <Grid className="video-container">
            <video controls loop>
              <source src={video} type="video/mp4" />
            </video>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Typography marginBottom={1} align="center">
            Comentários
          </Typography>
          <CommentSection comments={comments} />
        </Grid>
      </Grid>
    </Container>
  );
};
