import { useState, ReactNode } from "react";
import {
  Container,
  Drawer,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

type SearchDrawerProps = {
  open: boolean;
  onClose: () => void;
  anchor: "left";
};

type RecentSearchs = {
  image: ReactNode;
  name: string;
  nickname: string;
};

export const SearchDrawer = (props: SearchDrawerProps) => {
  const data = useState<Array<RecentSearchs>>([]);

  return (
    <Drawer
      anchor={props.anchor}
      open={props.open}
      onClose={props.onClose}
      sx={{ [`& .MuiDrawer-paper`]: { backgroundColor: "black" } }}
    >
      <Container>
        <Typography marginTop={4} color="white">
          Search
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 340,
            m: 1,
            backgroundColor: "#d3d3d380",
            color: "white",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, color: "white" }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
        </Paper>
        <Typography
          sx={{ borderTop: 1, borderColor: "#673AB7", paddingTop: 2 }}
          marginTop={4}
          color="white"
        >
          {data ? (
            <Typography align="center" color={"white"}>
              No recent searchs
            </Typography>
          ) : (
            data
          )}
        </Typography>
      </Container>
    </Drawer>
  );
};
