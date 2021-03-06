import React from "react";
import { Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
// import { PageNotFound } from "./contents/notFound404";

function ProtectedRoute(props) {
  const Component = props.component;
  const [token] = useCookies(["token"]);
  const isAuthenticated = token["token"];

  // return isAuthenticated ? <Component /> : <PageNotFound />;
  return isAuthenticated ? <Component /> : <Redirect to={{ pathname: "/" }} />;
}

export { ProtectedRoute };
