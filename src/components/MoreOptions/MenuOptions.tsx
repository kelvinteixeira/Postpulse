import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(7),
    minWidth: 220,
    backgroundColor: "#b5b2b2",
    color:
      theme.palette.mode === "light"
        ? "#000"
        : theme.palette.grey[300],
    boxShadow:
      "#673AB7 0px 0px 0px 0px, #673AB7 0px 0px 0px 1px,#3c1285 0px 5px 15px -3px, #673AB7 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.primary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.contrastText,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

type MenuOptionsProps = {
  open: boolean;
  onClose: () => void;
  anchor: null | HTMLElement;
};

export default function MenuOptions(props: MenuOptionsProps) {
  return (
    <StyledMenu
      id="demo-customized-menu"
      MenuListProps={{
        "aria-labelledby": "demo-customized-button",
      }}
      anchorEl={props.anchor}
      open={props.open}
      onClose={props.onClose}
    >
      <MenuItem onClick={props.onClose} disableRipple>
        <EditIcon />
        Edit
      </MenuItem>
      <MenuItem onClick={props.onClose} disableRipple>
        <FileCopyIcon />
        Duplicate
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={props.onClose} disableRipple>
        <ArchiveIcon />
        Archive
      </MenuItem>
      <MenuItem onClick={props.onClose} disableRipple>
        <MoreHorizIcon />
        More
      </MenuItem>
    </StyledMenu>
  );
}
