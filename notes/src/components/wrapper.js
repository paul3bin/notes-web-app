import React from "react";

import Nav from "./navbar";
import Footer from "./landing_footer";
import { useCookies } from "react-cookie";

const Wrapper = (props) => {
  const [token] = useCookies(["token"]);
  const isAuthenticated = token["token"];
  return isAuthenticated ? (
    <div className="d-flex h-100 text-center text-white bg-dark bg-gradient">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        {props.children}
      </div>
    </div>
  ) : (
    <div className="d-flex h-100 text-center text-white bg-dark bg-gradient">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Nav />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
