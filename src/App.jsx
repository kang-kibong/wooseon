import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RouteChangeTracker from "./components/RouteChangeTracker";

function App() {
  RouteChangeTracker();
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
