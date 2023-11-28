import { useState } from "react";
import {
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";

export const SingIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", minWidth: "100vw", backgroundColor: "white" }}
    >
      <Grid>
        <Grid
          sx={{
            border: 1,
            borderColor: "#673AB7",
            borderRadius: 1,
            padding: 4,
            width: 350,
            marginBottom: 2,
          }}
        >
          <Typography
            align="center"
            sx={{
              fontFamily: "Hopsters",
              fontWeight: 700,
              fontSize: 50,
              color: "#673AB7",
            }}
          >
            Postpulse
          </Typography>

          <FormControl
            variant="standard"
            sx={{ width: "100%", marginBottom: 2 }}
          >
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" />
          </FormControl>

          <FormControl
            color="primary"
            variant="standard"
            sx={{ width: "100%", marginBottom: 2 }}
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              color="primary"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "#673AB7" }} />
                    ) : (
                      <Visibility sx={{ color: "#673AB7" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: 11,
                textDecoration: "underline",
                color: "#673AB7",
                cursor: "pointer",
              }}
            >
              Esqueceu a senha?
            </Typography>
          </FormControl>

          <Button
            variant="contained"
            fullWidth
            sx={{ textTransform: "none", borderRadius: 2, marginBottom: 2 }}
            color="primary"
          >
            Entrar
          </Button>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ marginBottom: 2 }}
          >
            <Grid item xs={5}>
              <Divider />
            </Grid>
            <Typography sx={{ color: "#673AB7" }}>Ou</Typography>
            <Grid item xs={5}>
              <Divider />
            </Grid>
          </Grid>
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <GoogleIcon sx={{ color: "#673AB7", marginRight: 2 }} />
            <Typography sx={{ color: "#673AB7" }}>
              Entre com o google
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            border: 1,
            borderColor: "#673AB7",
            borderRadius: 1,
            height: 50,
          }}
        >
          <Typography sx={{ color: "black" }}>
            Não possui conta? &nbsp;
          </Typography>
          <Typography sx={{ color: "#673AB7" }}>Cadastre-se</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
