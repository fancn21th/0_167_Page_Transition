import React from "react";
import Nav from "../nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routerConfig } from "config";
import "./index.css";

const Root = () => {
  return (
    <Router>
      <>
        <Nav />
        <main>
          <Switch>
            {routerConfig.map(({ path, component }) => {
              const Comp = component;
              return (
                <Route key={path} path={path}>
                  <Comp />
                </Route>
              );
            })}
          </Switch>
        </main>
      </>
    </Router>
  );
};

export default Root;
