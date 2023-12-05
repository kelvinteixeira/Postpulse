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
  Link,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";

interface FormValues {
  username: string;
  password: string;
}

interface SignInProps {
  onLoginSuccess: (isLoggedIn: boolean) => void;
}

export const SingIn = ({ onLoginSuccess }: SignInProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { username, password } = formValues;
    if (username === "user" && password === "123456") {
      localStorage.setItem("usuarioLogado", "true");
      navigate("/home");
      onLoginSuccess(true);
    } else {
      window.alert("Credenciais inválidas!");
      return false;
    }
  }

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
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              id="username"
            />
          </FormControl>

          <FormControl
            color="primary"
            variant="standard"
            sx={{ width: "100%", marginBottom: 2 }}
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
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
              Forget password?
            </Typography>
          </FormControl>

          <Button
            onClick={handleSubmit}
            variant="contained"
            fullWidth
            sx={{ textTransform: "none", borderRadius: 2, marginBottom: 2 }}
            color="primary"
          >
            Log in
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
            <Typography sx={{ color: "#673AB7" }}>OR</Typography>
            <Grid item xs={5}>
              <Divider />
            </Grid>
          </Grid>
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <GoogleIcon sx={{ color: "#673AB7", marginRight: 2 }} />
            <Typography sx={{ color: "#673AB7" }}>
              Log in with google
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
            Don't have an account? &nbsp;
          </Typography>
          <Link href="/singup" variant="body1" sx={{ color: "#673AB7", cursor: 'pointer' }}>Sing up</Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
