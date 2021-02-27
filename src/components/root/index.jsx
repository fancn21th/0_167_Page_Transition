import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Foo, Bar, Home } from "../../pages";

const Root = () => {
  return (
    <Router>
      <>
        <nav>
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
        <main>
          <Switch>
            <Route path="/foo">
              <Foo />
            </Route>
            <Route path="/bar">
              <Bar />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </>
    </Router>
  );
};

export default Root;
