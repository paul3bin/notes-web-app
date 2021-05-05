import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./contents/home";
import { Login } from "./contents/login";
import { SignUp } from "./contents/signup";
import { NewNote } from "./contents/newNote";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/new">
        <NewNote />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <SignUp />
      </Route>
    </Router>
  );
}

export default App;
