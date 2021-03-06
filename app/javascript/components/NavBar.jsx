import React from "react";
import ReactDOM from 'react-dom'
import "../stylesheets/Header.css"

const NavBar = () => (
    <header className="NavBar">
        <nav className="Nav">
            <a href="/">Home</a>
            <a href="/class_groups">Classes</a>
            <a href="/">Students</a>
            <button>Logout</button>
        </nav>
    </header>
)

export default NavBar;
