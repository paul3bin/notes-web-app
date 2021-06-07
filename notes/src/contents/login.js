import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import Wrapper from "../components/wrapper";
import { API } from "../Api";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/landing.css";

export function Login() {
  document.title = "Notes | Login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken, deleteToken] = useCookies(["token"]);
  const [userID, setUserID, deleteUserID] = useCookies(["uid"]);

  const history = useHistory();
  const loginClicked = () => {
    API.loginUser({ email: email, password: password })
      .then((resp) => [
        setToken("token", resp.token),
        setUserID("uid", resp.user_id),
      ])
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (token["token"] === "undefined") {
      toast.error("Wrong username or password.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      deleteToken(["token"]);
      deleteUserID(["uid"]);
      setEmail("");
      setPassword("");
    } else {
      if (token["token"]) history.push("/home");
    }
  }, [token]);

  return (
    <Wrapper>
      <ToastContainer />
      <div className="card text-light bg-dark mb-3 shadow p-3 mb-5 rounded">
        <div className="card-header">Login</div>
        <div className="card-body">
          <p className="card-text">
            <div>
              <div class="form-floating mb-3 text-dark">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3 text-dark">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>
              <p>
                Don't have an account? Register <Link to="/signup">here</Link>.
              </p>
              <button class="btn btn-primary" onClick={loginClicked}>
                Submit
              </button>
            </div>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
