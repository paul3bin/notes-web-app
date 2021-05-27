import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./contents/home";
import { Login } from "./contents/login";
import { SignUp } from "./contents/signup";
import { NewNote } from "./contents/newNote";
import { Landing } from "./contents/landing";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/new">
        <NewNote />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </Router>
  );
}

export default App;
