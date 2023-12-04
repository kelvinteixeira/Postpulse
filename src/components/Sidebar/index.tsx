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
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Sidebar = () => {
  const [openSearchDrawer, setOpenSearchDrawer] = useState(false);
  const [openNotificationsDrawer, setOpenNotificationsDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Box
      sx={{
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
          <ListItemButton onClick={handleClickOpen}>
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

        <Divider sx={{ backgroundColor: "#673ab7", margin: "5px 0 5px 0" }} />

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
              <MenuOutlinedIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={"More"} sx={{ color: "white" }} />
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
        onClose={handleClose}
      />

      <NotificationsDrawer
        open={openNotificationsDrawer}
        onClose={() => setOpenNotificationsDrawer(false)}
        anchor={"left"}
      />
    </Box>
  );
};
