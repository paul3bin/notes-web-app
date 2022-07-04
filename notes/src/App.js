import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./contents/home";
import { Login } from "./contents/login";
import { SignUp } from "./contents/signup";
import { Landing } from "./contents/landing";
import { ProtectedRoute } from "./ProtectedRoute";
import { PageNotFound } from "./contents/notFound404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <ProtectedRoute exact path="/home" component={Home} />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
