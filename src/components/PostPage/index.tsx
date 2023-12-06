import { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

import { CommentSection } from "../ComentSection";
import { comments } from "../../services/mock";

import video from "../../assets/videos/backgroundSingIn.mp4";

import BookmarksIcon from "@mui/icons-material/Bookmarks";
import StarIcon from "@mui/icons-material/Star";

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
            <IconButton onClick={handleFavoritePost} color="primary">
              {favoritedPost ? (
                <BookmarksIcon sx={{ color: "#673AB7" }} />
              ) : (
                <BookmarksIcon sx={{ color: "#fff" }} />
              )}
            </IconButton>
          </Grid>
        </Grid>

        <Grid item xs={4} marginTop={2}>
          <CommentSection comments={comments} heightValue={500} />
        </Grid>
      </Grid>
    </Box>
  );
};
