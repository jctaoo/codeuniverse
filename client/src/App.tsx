import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AdminPage, HomePage, LoginPage, PreferencesPage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/admin">
              <h1>Admin Pages</h1>
              <Switch>
                  <Route path="/admin" component={AdminPage}/>
              </Switch>
          </Route>
          <Route>
            <NavBar />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/preferences" component={PreferencesPage} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export { App };
