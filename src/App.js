import { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Awards from "./pages/Awards";

export default function App() {
  useEffect(() => {
    document.body.style.backgroundImage =
      "linear-gradient(rgba(7, 10, 30, 0.55), rgba(7, 10, 30, 0.55)), url('/space.jpg')";
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </Router>
  );
}
