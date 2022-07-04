import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import "../styles/landing.css";

import Wrapper from "../components/wrapper";

export function PageNotFound() {
  document.title = "Page Not Found!";
  const [token] = useCookies(["token"]);
  const isAuthenticated = token["token"];

  return isAuthenticated ? (
    <Wrapper>
      <div className="d-flex h-100 text-center text-white bg-dark bg-gradient">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main className="px-3">
            <h1>404 | Page not found!</h1>
            <p className="lead">Click on Home to return to homepage.</p>
            <p class="lead">
              <Link
                to="/home"
                class="btn btn-lg btn-secondary fw-bold border-white bg-white"
              >
                Home
              </Link>
            </p>
          </main>
        </div>
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      <div className="d-flex h-100 text-center text-white bg-dark bg-gradient">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main className="px-3">
            <h1>404 | Page not found!</h1>
            <p className="lead">Login to continue.</p>
            <p class="lead">
              <Link
                to="/login"
                class="btn btn-lg btn-secondary fw-bold border-white bg-white"
              >
                Login
              </Link>
            </p>
          </main>
        </div>
      </div>
    </Wrapper>
  );
}
