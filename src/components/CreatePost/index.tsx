import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  Divider,
  Box,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

type CreatePostProps = {
  title: string;
  content: string;
  open: boolean;
  onClose: () => void;
  buttonTitle: string;
};

export const CreatePost = (props: CreatePostProps) => {
  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.onClose}
      sx={{}}
    >
      <Box className="glass-effect">

      <DialogTitle  sx={{ background: "#b5b2b2" }} align="center">
        {"Create new post"}
      </DialogTitle>
      <Divider sx={{ backgroundColor: "#673AB7" }} />
      <Box
        sx={{
          width: 500,
          height: 450,
          display: "flex",
          backgroundColor: "#b5b2b2",
        }}
        >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          >
          <Box className="post-icon">
            <img
              src="/public/images/camera-icon.png"
              alt="picture of a camera"
            />
          </Box>
          <DialogContentText id="alert-dialog-slide-description">
            {props.content}
          </DialogContentText>
          <Button
            variant="contained"
            sx={{ textTransform: "none", borderRadius: 2, marginTop: 2 }}
            color="primary"
            >
            {props.buttonTitle}
          </Button>
        </DialogContent>
      </Box>
            </Box>
    </Dialog>
  );
};
