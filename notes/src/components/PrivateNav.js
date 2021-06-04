import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import "../styles/home.css";

const PrivateNav = () => {
  const [token, setToken, deleteToken] = useCookies(["token"]);
  const [userID, setUserID, deleteUserID] = useCookies(["uid"]);

  const history = useHistory();

  const logoutAction = () => {
    deleteToken(["token"]);
    deleteUserID(["uid"]);
    history.push("/");
  };

  return (
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        Notes
      </a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" onClick={logoutAction}>
            Sign out
          </a>
        </li>
      </ul>
    </header>
  );
};

export default PrivateNav;
