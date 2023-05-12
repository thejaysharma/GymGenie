import "./App.css";
import Login from "./Components/Pages/Login/Login";
import Signup from "./Components/Pages/Signup/Signup";
import Forgotpass from "./Components/Pages/Forgotpass/Forgotpass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/Pages/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
