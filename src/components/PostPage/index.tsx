import { useState } from "react";
import { Box, Button, Grid, Rating, Typography } from "@mui/material";

import { CommentSection } from "../ComentSection";

import video from "../../assets/videos/backgroundSingIn.mp4";

import StarIcon from "@mui/icons-material/Star";
import { comments } from "../../services/mock";

export const PostPage = () => {
  const [value, setValue] = useState<number | null>(1);
  const [favoritedPost, setFavoritedPost] = useState(false);

  function handleFavoritePost() {
    setFavoritedPost(!favoritedPost);
  }
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Grid
        container
        spacing={1}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={1}
      >
        <Grid item xs={7}>
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 700,
              color: "#673AB7",
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
          <Grid container justifyContent={"flex-end"}>
            <Button
              onClick={handleFavoritePost}
              variant="contained"
              sx={{ textTransform: "none", borderRadius: 2, marginTop: 1 }}
              color="primary"
              endIcon={
                favoritedPost ? (
                  <StarIcon />
                ) : (
                  <StarIcon sx={{ color: "yellow" }} />
                )
              }
            >
              {favoritedPost ? "Favorite" : "Favorited"}
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Typography marginBottom={1} align="center">
            Comentários
          </Typography>
          <CommentSection comments={comments} />
        </Grid>
      </Grid>
    </Box>
  );
};
