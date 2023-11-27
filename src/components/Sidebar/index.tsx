import { useState } from "react";
import {
  Drawer,
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

const drawerWidth = 240;

export const Sidebar = (open: boolean) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent, open) => {
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
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderColor: "purple",
            backgroundColor: "black",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          sx={{
            marginLeft: 2,
            marginTop: 5,
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

        <List sx={{ bottom: 0, position: "fixed", width: drawerWidth }}>
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
                    <MenuOutlinedIcon
                      sx={{ color: "purple" }}
                      fontSize="large"
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Drawer anchor={"left"} open={openDrawer} onClose={toggleDrawer(false)}>
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
      </Drawer>
    </>
  );
};
