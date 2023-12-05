import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingIn } from "./screens/SingIn";
import { SingUp } from "./screens/SingUp";
import { Home } from "./screens/Home/Index";
import { Profile } from "./components/Profile";
import { Grid } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

const AppRoutes = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLoginSuccess = (isLoggedIn: boolean) => {
    setIsUserLoggedIn(isLoggedIn);
  };

  return (
    <BrowserRouter>
      <Grid container>
        {!isUserLoggedIn && (
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
        )}
        <Grid item xs={10}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/"
              element={<SingIn onLoginSuccess={handleLoginSuccess} />}
            />
            <Route path="/singup" element={<SingUp />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export default AppRoutes;
