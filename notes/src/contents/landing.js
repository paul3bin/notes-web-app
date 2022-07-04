import React from "react";
import { Link } from "react-router-dom";

import "../styles/landing.css";

import Wrapper from "../components/wrapper";

export function Landing() {
  document.title = "Notes | Welcome";

  return (
    <Wrapper>
      <main className="px-3">
        <h1>A web-app for your notes.</h1>
        <p className="lead">
          Notes is a web-app where you can create new notes, update them or even
          delete it.
        </p>
        <p class="lead">
          <Link
            to="/login"
            class="btn btn-lg btn-secondary fw-bold border-white bg-white"
          >
            Login
          </Link>
        </p>
      </main>
    </Wrapper>
  );
}
