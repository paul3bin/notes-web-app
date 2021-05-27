import React from "react";

import "../styles/landing.css";

import Nav from "../components/navbar";

export function Landing() {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Nav />

        <main className="px-3">
          <h1>A web-app for your notes.</h1>
          <p className="lead">
            Notes is a web-app where you can create, update, delete, export and
            even download your notes as PDF
          </p>
        </main>

        <footer className="mt-auto text-white-50">
          <p>
            Made with love by{" "}
            <a href="https://twitter.com/paul_ebin" className="text-white">
              @paul_ebin
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
