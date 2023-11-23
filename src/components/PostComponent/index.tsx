import { Container, Grid, Rating, Typography } from "@mui/material";
import video from "../../assets/videos/backgroundSingIn.mp4";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";

export const PostComponent = () => {
  const [value, setValue] = useState<number | null>();
  return (
    <Container>
      <Typography sx={{ fontWeight: 700, marginTop: 2 }}>
        Título do vídeo
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-end",
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
              display: "flex",
              justifyContent: "flex-end",
            }}
            size="medium"
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ color: "lightgray" }} fontSize="inherit" />
            }
            name="simple-controlled"
            defaultValue={1}
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
          <Typography marginBottom={1} align="center">Comentários</Typography>
          <Grid
            height={'70vh'}
            sx={{ border: 2, borderColor: "white", borderRadius: 2 }}
          ></Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
