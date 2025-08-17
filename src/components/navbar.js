import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">QuicKart🛒</h2>
            <ul className="navbar-links">
                <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                   Add Groceries      
                  </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;