import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
