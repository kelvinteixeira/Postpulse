import { Grid, ThemeProvider, createTheme } from "@mui/material";
import "./Global.css";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./screens/Home/Index";
// import { SingIn } from "./screens/SingIn";
// import { SingUp } from "./screens/SingUp";
import { deepPurple, purple } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: purple,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid sx={{ display: "flex" }}>
        <Sidebar />
        <Home />
        {/* <SingIn/> */}
        {/* <SingUp/> */}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
