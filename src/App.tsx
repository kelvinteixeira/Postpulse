import { ThemeProvider, createTheme } from "@mui/material";
import AppRoutes from "./routes";
import "./Global.css";

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
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
