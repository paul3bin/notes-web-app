import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">
          <Link className="text-light text-deco fs-2" to="/">
            Notes
          </Link>
        </h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <Link className="nav-link active" aria-current="page" to="/login">
            Login
          </Link>
          <Link className="nav-link active" aria-current="page" to="/signup">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
