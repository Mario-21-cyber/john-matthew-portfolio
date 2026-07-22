import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/" element={<Hero />} />

        <Route path="/experience" element={<Experience />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/about" element={<About />} />

        

      </Routes>

    </BrowserRouter>
  );
}

export default App;