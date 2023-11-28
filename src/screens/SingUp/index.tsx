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

export const SingUp = () => {
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
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        paddingTop: 2,
      }}
    >
      <Grid>
        <Grid
          sx={{
            border: 1,
            borderColor: "purple",
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
              color: "purple",
            }}
          >
            Postpulse
          </Typography>
          <Typography color="gray" align="center" fontWeight={700}>
            Cadastra-se para começar a postar conteúdos incríveis.
          </Typography>

          <FormControl
            variant="standard"
            sx={{ width: "100%", marginBottom: 2 }}
          >
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" />
          </FormControl>

          <FormControl
            variant="standard"
            sx={{ width: "100%", marginBottom: 2 }}
          >
            <InputLabel htmlFor="fullname">Nome completo</InputLabel>
            <Input id="fullname" />
          </FormControl>

          <FormControl
            variant="standard"
            sx={{ width: "100%", marginBottom: 2 }}
          >
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input id="username" />
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
                      <VisibilityOff sx={{ color: "purple" }} />
                    ) : (
                      <Visibility sx={{ color: "purple" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Typography
            align="center"
            fontSize={12}
            fontWeight={500}
            color={"gray"}
            marginBottom={2}
          >
            Ao se cadastrar você está ciente e aceita nossos termos de
            compromissos, termos de privacidade, Cookies e nossas diretizes.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{ textTransform: "none", borderRadius: 2, marginBottom: 2 }}
            color="primary"
          >
            Cadastrar
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
            <Typography sx={{ color: "purple" }}>Ou</Typography>
            <Grid item xs={5}>
              <Divider />
            </Grid>
          </Grid>
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <GoogleIcon sx={{ color: "purple", marginRight: 2 }} />
            <Typography sx={{ color: "purple" }}>
              Cadastrar com o google
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            border: 1,
            borderColor: "purple",
            borderRadius: 1,
            height: 50,
            marginBottom: 4,
          }}
        >
          <Typography sx={{ color: "black" }}>
            Já é cadastrado? &nbsp;
          </Typography>
          <Typography sx={{ color: "purple" }}>Entrar</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
