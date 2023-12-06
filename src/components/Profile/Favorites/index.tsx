import { useState } from "react";
import {
  Grid,
  IconButton,
  Rating,
} from "@mui/material";

import { CommentSection } from "../../ComentSection";

import video from "../../../assets/videos/backgroundSingIn.mp4";

import StarIcon from "@mui/icons-material/Star";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { comments } from "../../../services/mock";


export const Favorites = () => {
  const [value, setValue] = useState<number | null>(1);
  const [favoritedPost, setFavoritedPost] = useState(false);

  function handleFavoritePost() {
    setFavoritedPost(!favoritedPost);
  }
  return (
    <Grid container spacing={2} marginTop={1} marginBottom={2}>
      <Grid item xs={6}>
        <Grid className="video-container">
          <video controls loop>
            <source src={video} type="video/mp4" />
          </video>
        </Grid>

        <Grid container justifyContent={"space-between"}>
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

          <IconButton onClick={handleFavoritePost} color="primary">
            {favoritedPost ? (
              <BookmarksIcon sx={{ color: "#673AB7" }} />
            ) : (
              <BookmarksIcon sx={{ color: "#fff" }} />
            )}
          </IconButton>
        </Grid>
        <CommentSection comments={comments} heightValue={300}/>
      </Grid>

      <Grid item xs={6}>
          
      </Grid>
    </Grid>
  );
};
