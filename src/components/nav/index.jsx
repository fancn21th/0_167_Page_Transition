import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => (
  <nav className="nav-container">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/foo">Foo</Link>
      </li>
      <li>
        <Link to="/bar">Bar</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
