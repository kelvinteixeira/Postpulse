import { Grid } from "@mui/material";
import "./Global.css";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./screens/Home/Index";
// import { SingIn } from "./screens/SingIn";
// import { SingUp } from "./screens/SingUp";

function App() {
  return (
    <Grid sx={{display: 'flex'}}>
      <Sidebar />
      <Home />
      {/* <SingIn/> */}
      {/* <SingUp/> */}
    </Grid>
  );
}

export default App;
