import React from 'react';
import '../components/Nav.scss'; // Import the SCSS stylesheet
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Nav = (props) => {
    return (
        <nav className="primary-nav"> {/* Clear and descriptive class name */}
            <NavLink className="nav-link" to="/" exact>Home</NavLink>
            <NavLink className="nav-link" to="/news">News</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
        </nav>
    );
};

export default Nav;
