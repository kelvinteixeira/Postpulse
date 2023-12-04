import { useState } from "react";
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import video from "../../assets/videos/backgroundSingIn.mp4";

import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import { CommentSection } from "../ComentSection";
import { comments } from "../PostPage";

export const Profile = () => {
  const [value, setValue] = useState(0);
  const [favoritedPost, setFavoritedPost] = useState(false);

  function handleFavoritePost() {
    setFavoritedPost(!favoritedPost);
  }

  return (
    <Grid width={"100%"}>
      <Box height={200} sx={{ borderBottom: "2px solid #673ab7" }}>
        <Grid
          container
          justifyContent={"center"}
          spacing={1}
          sx={{ padding: 3 }}
        >
          <Avatar sx={{ width: 150, height: 150 }} />
          <Grid marginLeft={2}>
            <Typography>Name</Typography>
            <Typography variant="body2" fontSize={12}>
              Username
            </Typography>
            <Typography
              variant="body2"
              fontWeight={"300 !important"}
              fontSize={12}
            >
              Viajante das palavras, em busca de histórias no vasto mundo.
              Curioso, otimista e sempre pronto para novos aprendizados. ✨📚✨
            </Typography>

            <Grid container marginTop={4}>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: 10, fontWeight: 700 }}>
                  Avaliação Global
                </Typography>
                <Rating
                  name="profile-avaliation"
                  value={4}
                  readOnly
                  size="large"
                  emptyIcon={
                    <StarIcon
                      style={{ color: "lightgray" }}
                      fontSize="inherit"
                    />
                  }
                />
              </Grid>
              <Typography variant="body2" marginRight={3} fontSize={15}>
                21 <Typography fontSize={10}>posts</Typography>
              </Typography>
              <Typography variant="body2" marginRight={3} fontSize={15}>
                323 <Typography fontSize={10}>Followers</Typography>
              </Typography>
              <Typography variant="body2" marginRight={10} fontSize={15}>
                267 <Typography fontSize={10}>Following</Typography>
              </Typography>

              <Button
                variant="contained"
                sx={{ textTransform: "none", borderRadius: 2, marginBottom: 2 }}
                color="primary"
              >
                Edit profile
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ borderBottom: "2px solid #673ab7" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Posts" icon={<VideoLibraryIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8} marginTop={1}>
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
              readOnly
              sx={{
                marginBottom: 1,
              }}
              size="medium"
              emptyIcon={
                <StarIcon style={{ color: "lightgray" }} fontSize="inherit" />
              }
              name="rating-post"
              value={2}
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
            <Typography marginBottom={1} marginTop={1} align="center">
              Comentários
            </Typography>
            <CommentSection comments={comments} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
