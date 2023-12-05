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
      {isUserLoggedIn ? (
        <Grid sx={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Grid>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<SingIn onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/singup" element={<SingUp />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default AppRoutes;
