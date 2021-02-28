import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => (
  <nav>
    <ul className="nav-container">
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
