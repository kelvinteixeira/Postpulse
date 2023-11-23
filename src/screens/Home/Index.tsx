import { Grid } from "@mui/material";

import { Header } from "../../components/Header";
import { PostComponent } from "../../components/PostComponent";

export const Home = () => {
  return (
    <Grid width={"85%"}  sx={{ backgroundColor: "black" }}>
      <Header />
      <PostComponent />
    </Grid>
  );
};
