import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Sidebar = () => {
  return (
    <Box
      height={"100vh"}
      width={"15%"}
      sx={{
        borderRight: 1,
        borderColor: "white",
        backgroundColor: "black",
        overflow: "hidden"
      }}
    >
      <Typography
        sx={{
          marginLeft: 2,
          marginTop: 5,
          marginBottom: 4,
          fontFamily: "Hopsters",
          fontWeight: 500,
          fontSize: 40,
          cursor: "pointer",
          overflow: "hidden",
          color: "purple"
        }}
      >
        Postpulse
      </Typography>
      <MenuList>
        <MenuItem sx={{ marginBottom: 2 }}>
          <ListItemIcon>
            <HomeOutlinedIcon sx={{ color: "purple" }} fontSize="medium" />
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: 700 }}>Home</ListItemText>
        </MenuItem>
        <MenuItem sx={{ marginBottom: 2 }}>
          <ListItemIcon>
            <SearchOutlinedIcon sx={{ color: "purple" }} fontSize="medium" />
          </ListItemIcon>
          <ListItemText>Pesquisar</ListItemText>
        </MenuItem>
        <MenuItem sx={{ marginBottom: 2 }}>
          <ListItemIcon>
            <CenterFocusStrongOutlinedIcon
              sx={{ color: "purple" }}
              fontSize="medium"
            />
          </ListItemIcon>
          <ListItemText>Novo post</ListItemText>
        </MenuItem>
        <MenuItem sx={{ marginBottom: 2 }}>
          <ListItemIcon>
            <NotificationsActiveOutlinedIcon
              sx={{ color: "purple" }}
              fontSize="medium"
            />
          </ListItemIcon>
          <ListItemText>Notificações</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: "purple" }} fontSize="medium" />
          </ListItemIcon>
          <ListItemText>Perfil</ListItemText>
        </MenuItem>
        <Box sx={{ bottom: 0, position: "fixed" }}>
          <MenuItem>
            <ListItemIcon>
              <SettingsOutlinedIcon
                sx={{ color: "purple" }}
                fontSize="medium"
              />
            </ListItemIcon>
            <ListItemText>Configurações</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <MenuOutlinedIcon sx={{ color: "purple" }} fontSize="medium" />
            </ListItemIcon>
            <ListItemText>Mais</ListItemText>
          </MenuItem>
        </Box>
      </MenuList>
    </Box>
  );
};
