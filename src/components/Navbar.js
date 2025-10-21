import * as React from "react";
import { Link } from "gatsby";
import icon from "../images/icon.png";
import "../styles/global.css";

export default function Navbar() {
  const handleProjectsClick = (e) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      document.querySelector("#posts")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar" aria-label="Main">
      <Link to="/" className="brand">
        <img src={icon} alt="Logo" className="nav-logo" />
      </Link>
      <div className="nav-links">
        <Link to="/" className="navlink">🏠 Home</Link>
        <a href="/#posts" onClick={handleProjectsClick} className="navlink">🖥️ Projects</a>
        <a href="/#about" className="navlink">📋 About</a>
        <a href="/#socials" className="navlink">📱 Socials</a>
      </div>
    </nav>
  );
}
