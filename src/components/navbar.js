import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">GroceryListApp</h2>
            <ul className="navbar-links">
                <li>
                  <NavLink to="/todos"
                   className={({ isActive }) => (isActive ? "active" : "")}>
                    Grocery List
                  </NavLink>
                </li>
                <li>
                    <NavLink to="/contact"
                     className={({ isActive }) => (isActive ? "active" : "")}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;