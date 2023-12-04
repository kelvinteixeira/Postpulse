import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingIn } from "./screens/SingIn";
import { SingUp } from "./screens/SingUp";
import { Home } from "./screens/Home/Index";
import { Profile } from "./components/Profile";
import { Grid } from "@mui/material";
import { Sidebar } from "./components/Sidebar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Grid sx={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<SingIn />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Grid>
    </BrowserRouter>
  );
};

export default AppRoutes;
