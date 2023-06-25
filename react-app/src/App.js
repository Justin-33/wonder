import Router from "./router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const defaultTheme = createTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>

    </>
  );
}

export default App;
