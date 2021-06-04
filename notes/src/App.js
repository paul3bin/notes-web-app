import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./contents/home";
import { Login } from "./contents/login";
import { SignUp } from "./contents/signup";
import { Landing } from "./contents/landing";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
