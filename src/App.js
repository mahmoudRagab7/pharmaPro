import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  // typography: {
  //   fontFamily: ["IBM"],
  // },
  palette: {
    primary: {
      main: "#386f8e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
