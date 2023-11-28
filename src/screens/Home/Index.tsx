import { Grid } from "@mui/material";

import { Header } from "../../components/Header";
import { PostPage } from "../../components/PostPage";

export const Home = () => {
  return (
    <Grid width={"85%"} sx={{ backgroundColor: "black" }}>
      <Header />
      <PostPage />
    </Grid>
  );
};
