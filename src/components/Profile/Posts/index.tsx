import { useState } from "react";
import { Container, Grid, Typography, Rating, IconButton } from "@mui/material";

import { comments } from "../../../services/mock";
import { CommentSection } from "../../ComentSection/";

import video from "../../../assets/videos/backgroundSingIn.mp4";

import StarIcon from "@mui/icons-material/Star";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

export const Post = () => {
  const [value, setValue] = useState<number | null>(1);
  const [favoritedPost, setFavoritedPost] = useState(false);

  function handleFavoritePost() {
    setFavoritedPost(!favoritedPost);
  }
  return (
    <Container>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={8}>
          <Grid
            container
            justifyContent={"space-between"}
            marginBottom={1}
            marginTop={1}
          >
            <Grid>
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
            </Grid>

            <IconButton onClick={handleFavoritePost} color="primary">
              {favoritedPost ? (
                <BookmarksIcon sx={{ color: "#673AB7" }} />
              ) : (
                <BookmarksIcon sx={{ color: "#fff" }} />
              )}
            </IconButton>
          </Grid>

          <Grid className="video-container">
            <video controls loop>
              <source src={video} type="video/mp4" />
            </video>
          </Grid>
        </Grid>

        <Grid item xs={4} marginTop={2}>
          <CommentSection comments={comments} heightValue={500} />
        </Grid>
      </Grid>
    </Container>
  );
};
