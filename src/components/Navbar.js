import * as React from "react";
import { Link } from "gatsby";
import icon from "../images/icon.png";
import "../styles/global.css";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleProjectsClick = (e) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      document.querySelector("#posts")?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  React.useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="navbar" aria-label="Main">
      <Link to="/" className="brand">
        <img src={icon} alt="Logo" className="nav-logo" />
      </Link>

      <button
        className="nav-toggle"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" className="navlink" onClick={() => setOpen(false)}>🏠 Home</Link>
        <a href="/#posts" className="navlink" onClick={handleProjectsClick}>🖥️ Projects</a>
        <a href="/#about" className="navlink" onClick={() => setOpen(false)}>📋 About</a>
        <a href="/#socials" className="navlink" onClick={() => setOpen(false)}>📱 Contact</a>
      </div>
    </nav>
  );
}
