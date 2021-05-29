import React from "react";
import { Link } from "react-router-dom";

import "../styles/landing.css";

import Nav from "../components/navbar";
import Footer from "../components/landing_footer";

export function Landing() {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark bg-gradient">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Nav />

        <main className="px-3">
          <h1>A web-app for your notes.</h1>
          <p className="lead">
            Notes is a web-app where you can create, update, delete, export your
            notes.
          </p>
          <p class="lead">
            <Link
              to="/signup"
              class="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              Sign Up
            </Link>
          </p>
        </main>

        <Footer />
      </div>
    </div>
  );
}
