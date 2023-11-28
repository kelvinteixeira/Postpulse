import { useState } from "react";
import {
  Badge,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { SearchDrawer } from "../SearchDrawer";
import { CreatePost } from "../CreatePost";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

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
        borderRight: "2px solid #673AB7",
        backgroundColor: "black",
        padding: "0 5px 0 5px",
      }}
    >
      <Typography
        color="primary"
        sx={{
          marginLeft: 2,
          padding: 3,
          marginBottom: 4,
          fontFamily: "Hopsters",
          fontSize: 40,
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        Postpulse
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeOutlinedIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Home"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={toggleDrawer(true)}>
            <ListItemIcon>
              <SearchOutlinedIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Search"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickOpen}>
            <ListItemIcon>
              <CenterFocusStrongOutlinedIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"New post"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Badge badgeContent={100} color="secondary">
                <NotificationsActiveOutlinedIcon
                  color="primary"
                  fontSize="large"
                />
              </Badge>
            </ListItemIcon>
            <ListItemText primary={"Notifications"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Profile"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
      </List>

      <List sx={{ bottom: 1, position: "fixed" }}>
        {["Settings", "Others"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <SettingsOutlinedIcon color="primary" fontSize="large" />
                ) : (
                  <MenuOutlinedIcon color="primary" fontSize="large" />
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

      <CreatePost
        title="Create new post"
        buttonTitle="Select from computer"
        content="Drag photos and videos here"
        open={openModal}
        onClose={handleClose}
      />
    </Box>
  );
};
