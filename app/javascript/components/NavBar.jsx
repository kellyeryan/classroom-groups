import React from "react";
import ReactDOM from 'react-dom'
import "../stylesheets/Header.css"

const NavBar = props => (
    <header className="NavBar">
        <nav className="Nav">
            <a href="/">Home</a>
            <a href="/">Classes</a>
            <a href="/">Students</a>
            <button>Logout</button>
        </nav>
    </header>
)

export default NavBar;
