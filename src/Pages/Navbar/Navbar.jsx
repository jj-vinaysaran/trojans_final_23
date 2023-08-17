import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="nav_container">
      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
        checked={menuOpen}
        onChange={handleMenuToggle}
      />
      <label className="nav-ico" htmlFor="menu-icon" />
  
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="pt-5">
          <li className="nav-lst">
            <Link to="/" className="nvg-opt" data-text="Home" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-lst">
            <Link to="/events" className="nvg-opt" data-text="Events" onClick={closeMenu}>
              Events
            </Link>
          </li>
          <li className="nav-lst">
            <Link to="/workshop" className="nvg-opt" data-text="Workshop" onClick={closeMenu}>
              Workshop
            </Link>
          </li>
          <li className="nav-lst">
            <Link to="/sponsors" className="nvg-opt" data-text="Sponsors" onClick={closeMenu}>
              Sponsors
            </Link>
          </li>
          <li className="nav-lst">
            <a href='https://forms.gle/73pTcgqmeRREtKuR8' className="nvg-opt" data-text="Sponsors" onClick={closeMenu}>
              Register
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;