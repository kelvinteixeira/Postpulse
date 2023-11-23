import { Avatar, Box, Grid, Rating, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{ borderBottom: 1, borderColor: "white", backgroundColor: "black" }}
    >
      <Grid container alignItems={"center"} spacing={2}>
        <Grid item sx={{ margin: 1 }}>
          <Avatar
            sx={{
              marginRight: 1,
              marginLeft: 5,
              marginBottom: 1,
              width: 80,
              height: 80,
              cursor: "pointer",
            }}
          />
        </Grid>

        <Grid item xs={2}>
          <Typography sx={{ cursor: "pointer", fontWeight: 700 }}>
            username
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography sx={{ fontSize: 10, fontWeight: 700, color: "purple" }}>
            Avaliação Global
          </Typography>
          <Rating name="profile-avaliation" value={5} readOnly size="large" />
        </Grid>

        <Grid item xs={1} sx={{ cursor: "pointer" }}>
          <Typography sx={{ fontSize: 10, fontWeight: 700, color: "purple" }}>
            Seguidores
          </Typography>
          <Typography sx={{ fontWeight: 700 }}>2135</Typography>
        </Grid>

        <Grid item xs={1} sx={{ cursor: "pointer" }}>
          <Typography sx={{ fontSize: 10, fontWeight: 700, color: "purple" }}>
            Seguindo
          </Typography>
          <Typography sx={{ fontWeight: 700 }}>4363</Typography>
        </Grid>

        <Grid item xs={2} sx={{ cursor: "pointer" }}>
          <Typography sx={{ fontSize: 10, fontWeight: 700, color: "purple" }}>Posts</Typography>
          <Typography sx={{ fontWeight: 700 }}>281</Typography>
        </Grid>

        <Grid item xs={1}>
          <Typography sx={{ fontSize: 15, fontWeight: 700 }} variant="overline">
            L O G O
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
