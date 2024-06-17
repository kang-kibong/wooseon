import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RouteChangeTracker from "./hooks/RouteChangeTracker";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";

function App() {
  RouteChangeTracker();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
