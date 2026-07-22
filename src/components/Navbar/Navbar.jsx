import "./Navbar.css";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        &lt;<span>/</span>&gt;
      </div>

      <nav className="nav-links">

  <NavLink
    to="/"
    className={({ isActive }) => isActive ? "active" : ""}
  >
    Home
  </NavLink>

  <NavLink
    to="/experience"
    className={({ isActive }) => isActive ? "active" : ""}
  >
    Experience
  </NavLink>

  <NavLink
    to="/projects"
    className={({ isActive }) => isActive ? "active" : ""}
  >
    Projects
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) => isActive ? "active" : ""}
  >
    About
  </NavLink>

  <button className="theme-btn">
    <FaMoon />
  </button>

</nav>

    </header>
  );
}

export default Navbar;