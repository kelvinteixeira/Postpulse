import { useState } from "react";
import {
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { SearchDrawer } from "../SearchDrawer";
import { CreatePost } from "../CreatePost";
import { NotificationsDrawer } from "../NotificationsDrawer";

import { useNavigate } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LogoutIcon from "@mui/icons-material/Logout";

export const Sidebar = () => {
  const [openSearchDrawer, setOpenSearchDrawer] = useState(false);
  const [openNotificationsDrawer, setOpenNotificationsDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        borderRight: "2px solid #673AB7",
        backgroundColor: "black",
        padding: "0 5px 0 5px",
        position: "fixed",
      }}
    >
      <Typography
        color="primary"
        sx={{
          marginLeft: 2,
          padding: 1,
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
          <ListItemButton
            onClick={() => {
              navigate("/home");
            }}
          >
            <ListItemIcon>
              <HomeOutlinedIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Home"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setOpenSearchDrawer(true)}>
            <ListItemIcon>
              <SearchOutlinedIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Search"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleOpenModal}>
            <ListItemIcon>
              <CenterFocusStrongOutlinedIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"New post"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setOpenNotificationsDrawer(true)}>
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
          <ListItemButton
            onClick={() => {
              navigate("/profile");
            }}
          >
            <ListItemIcon>
              <AccountCircleIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Profile"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BookmarksIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Favorites"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <Divider sx={{ backgroundColor: "#673ab7", margin: "5px 0 5px 0" }} />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ContactSupportIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Support"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsOutlinedIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Settings"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"Log out"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
      </List>

      <SearchDrawer
        open={openSearchDrawer}
        onClose={() => setOpenSearchDrawer(false)}
        anchor={"left"}
      />

      <CreatePost
        title="Create new post"
        buttonTitle="Select from computer"
        content="Drag photos and videos here"
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

      <NotificationsDrawer
        open={openNotificationsDrawer}
        onClose={() => setOpenNotificationsDrawer(false)}
        anchor={"left"}
      />
    </Box>
  );
};
