import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header class="mb-auto">
      <div>
        <h3 class="float-md-start mb-0">Notes</h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <Link class="nav-link active" aria-current="page" to="/">
            Home
          </Link>
          <Link class="nav-link active" aria-current="page" to="/login">
            Login
          </Link>
          <Link class="nav-link active" aria-current="page" to="/signup">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
