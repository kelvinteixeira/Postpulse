import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { SearchDrawer } from "../SearchDrawer";

export const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenDrawer(open);
    };

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        borderRight: '1px solid purple',
        backgroundColor: "black",
      }}
    >
      <Typography
        sx={{
          marginLeft: 2,
          padding: 3,
          marginBottom: 4,
          fontFamily: "Hopsters",
          fontSize: 40,
          cursor: "pointer",
          overflow: "hidden",
          color: "purple",
        }}
      >
        Postpulse
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeOutlinedIcon sx={{ color: "purple" }} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Home"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={toggleDrawer(true)}>
            <ListItemIcon>
              <SearchOutlinedIcon sx={{ color: "purple" }} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Search"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CenterFocusStrongOutlinedIcon
                sx={{ color: "purple" }}
                fontSize="large"
              />
            </ListItemIcon>
            <ListItemText primary={"New post"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsActiveOutlinedIcon
                sx={{ color: "purple" }}
                fontSize="large"
              />
            </ListItemIcon>
            <ListItemText primary={"Notifications"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon sx={{ color: "purple" }} fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Profile"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
      </List>

      <List sx={{bottom: 1, position: 'fixed'}}>
        {["Settings", "Others"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <SettingsOutlinedIcon
                    sx={{ color: "purple" }}
                    fontSize="large"
                  />
                ) : (
                  <MenuOutlinedIcon sx={{ color: "purple" }} fontSize="large" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <SearchDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor={"left"}
      />
    </Box>
  );
};
