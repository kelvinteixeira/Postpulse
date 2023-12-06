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

import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import StarIcon from "@mui/icons-material/Star";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Post } from "./Posts";
import { Favorites } from "./Favorites";

type ClickedOption = "postOption" | "favoriteOption" | "nearbyOption";

export const Profile = () => {
  const [value, setValue] = useState(0);
  const [clickedOption, setClickedOption] = useState("");

  let componenteRenderizado;

  switch (clickedOption) {
    case "favoriteOption":
      componenteRenderizado = <Favorites />;
      break;
    default:
      componenteRenderizado = <Post />;
  }

  const handleOptionChange = (newOption: ClickedOption) => {
    setClickedOption(newOption);
  };

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
          <BottomNavigationAction
            onClick={() => handleOptionChange("postOption")}
            label="Posts"
            icon={<VideoLibraryIcon />}
          />
          <BottomNavigationAction
            onClick={() => handleOptionChange("favoriteOption")}
            label="Favorites"
            icon={<BookmarksIcon />}
          />
          <BottomNavigationAction
            onClick={() => handleOptionChange("nearbyOption")}
            label="Nearby"
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </Box>
      <Container>{componenteRenderizado}</Container>
    </Grid>
  );
};
