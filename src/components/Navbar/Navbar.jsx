import "./Navbar.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const handleNavigationClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <header className="navbar">
      <div className="logo">
        &lt;<span>/</span>&gt;
      </div>

      <nav className="nav-links">
        <NavLink
          to="/"
          onClick={(e) => handleNavigationClick(e, "/")}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/experience"
          onClick={(e) => handleNavigationClick(e, "/experience")}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Experience
        </NavLink>

        <NavLink
          to="/projects"
          onClick={(e) => handleNavigationClick(e, "/projects")}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projects
        </NavLink>

        <NavLink
          to="/about"
          onClick={(e) => handleNavigationClick(e, "/about")}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
