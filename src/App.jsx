import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AuthScreen from "./pages/AuthScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/home"} element={<HomeScreen />} />
        <Route path={"/auth"} element={<AuthScreen />} />
        <Route path={"/"} element={<h1>Invalid Path</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
