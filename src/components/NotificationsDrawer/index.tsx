// import { useState, ReactNode } from "react";
import {
  Avatar,
  Container,
  Divider,
  Drawer,
  Grid,
  Typography,
} from "@mui/material";

type NotificationsDrawerProps = {
  open: boolean;
  onClose: () => void;
  anchor: "left";
};

// type Notifications = {
//   image: ReactNode;
//   nickname: string;
//   content: string;
// };

export const NotificationsDrawer = (props: NotificationsDrawerProps) => {
  // const data = useState<Array<Notifications>>([]);

  return (
    <Drawer
      anchor={props.anchor}
      open={props.open}
      onClose={props.onClose}
      sx={{ [`& .MuiDrawer-paper`]: { backgroundColor: "black", width: 400 } }}
    >
      <Container className="deep-purple-scrollbar" sx={{overflowY: 'auto'}}>
        <Typography marginTop={4} marginBottom={1} color="white">
          Notifications
        </Typography>

        <Typography color={"white"} marginBottom={2} variant="body2">
          Today
        </Typography>

        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ marginRight: 1 }} />
          </Grid>
          <Grid item xs={10} marginBottom={1}>
            <Typography fontSize={12} color={"white"} variant="body2">
              Username: &nbsp;
            </Typography>
            <Typography fontSize={12} color={"gray"} variant="body2">
              Liked you last post and changed the firts name of your babies to
              lolita and fuckawersome, be careful dude. 4h earlier
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: "#673AB7" }} />

        <Typography
          color={"white"}
          marginBottom={2}
          marginTop={2}
          variant="body2"
        >
          This week
        </Typography>

        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ marginRight: 1 }} />
          </Grid>
          <Grid item xs={10} marginBottom={1}>
            <Typography fontSize={12} color={"white"} variant="body2">
              Username: &nbsp;
            </Typography>
            <Typography fontSize={12} color={"gray"} variant="body2">
              Liked you last post and changed the firts name of your babies to
              lolita and fuckawersome, be careful dude. 4h earlier
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ marginRight: 1 }} />
          </Grid>
          <Grid item xs={10} marginBottom={1}>
            <Typography fontSize={12} color={"white"} variant="body2">
              Username: &nbsp;
            </Typography>
            <Typography fontSize={12} color={"gray"} variant="body2">
              Liked you last post and changed the firts name of your babies to
              lolita and fuckawersome, be careful dude. 4h earlier
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ marginRight: 1 }} />
          </Grid>
          <Grid item xs={10} marginBottom={1}>
            <Typography fontSize={12} color={"white"} variant="body2">
              Username: &nbsp;
            </Typography>
            <Typography fontSize={12} color={"gray"} variant="body2">
              Liked you last post and changed the firts name of your babies to
              lolita and fuckawersome, be careful dude. 4h earlier
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ marginRight: 1 }} />
          </Grid>
          <Grid item xs={10} marginBottom={1}>
            <Typography fontSize={12} color={"white"} variant="body2">
              Username: &nbsp;
            </Typography>
            <Typography fontSize={12} color={"gray"} variant="body2">
              Liked you last post and changed the firts name of your babies to
              lolita and fuckawersome, be careful dude. 4h earlier
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ marginRight: 1 }} />
          </Grid>
          <Grid item xs={10} marginBottom={1}>
            <Typography fontSize={12} color={"white"} variant="body2">
              Username: &nbsp;
            </Typography>
            <Typography fontSize={12} color={"gray"} variant="body2">
              Liked you last post and changed the firts name of your babies to
              lolita and fuckawersome, be careful dude. 4h earlier
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "#673AB7" }} />

        <Typography
          color={"white"}
          marginBottom={2}
          marginTop={2}
          variant="body2"
        >
          This month
        </Typography>
        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ marginRight: 1 }} />
          </Grid>
          <Grid item xs={10} marginBottom={1}>
            <Typography fontSize={12} color={"white"} variant="body2">
              Username: &nbsp;
            </Typography>
            <Typography fontSize={12} color={"gray"} variant="body2">
              Liked you last post and changed the firts name of your babies to
              lolita and fuckawersome, be careful dude. 4h earlier
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ marginRight: 1 }} />
          </Grid>
          <Grid item xs={10} marginBottom={1}>
            <Typography fontSize={12} color={"white"} variant="body2">
              Username: &nbsp;
            </Typography>
            <Typography fontSize={12} color={"gray"} variant="body2">
              Liked you last post and changed the firts name of your babies to
              lolita and fuckawersome, be careful dude. 4h earlier
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ marginRight: 1 }} />
          </Grid>
          <Grid item xs={10} marginBottom={1}>
            <Typography fontSize={12} color={"white"} variant="body2">
              Username: &nbsp;
            </Typography>
            <Typography fontSize={12} color={"gray"} variant="body2">
              Liked you last post and changed the firts name of your babies to
              lolita and fuckawersome, be careful dude. 4h earlier
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ marginRight: 1 }} />
          </Grid>
          <Grid item xs={10} marginBottom={1}>
            <Typography fontSize={12} color={"white"} variant="body2">
              Username: &nbsp;
            </Typography>
            <Typography fontSize={12} color={"gray"} variant="body2">
              Liked you last post and changed the firts name of your babies to
              lolita and fuckawersome, be careful dude. 4h earlier
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Drawer>
  );
};
