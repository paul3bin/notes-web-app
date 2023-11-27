import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Wrapper from "../components/wrapper";
import { API } from "../Api";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SignUp() {
  document.title = "Notes | Sign up";
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordReEnter, setPasswordReEnter] = useState("");

  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const passwordCheck = () => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password);
  };

  const passwordReEnterCheck = () => {
    return password === passwordReEnter;
  };

  const registerClicked = () => {
    if (name.length !== 0) {
      if (passwordCheck && passwordReEnterCheck) {
        if (email.match(validEmailRegex)) {
          API.registerUser({ email, password, name })
            .then((resp) =>
              resp.email[0] === "user with this email already exists."
                ? toast.error(
                    "User already exists!",
                    {
                      position: toast.POSITION.TOP_RIGHT,
                    },
                    (setEmail(""),
                    setPassword(""),
                    setPasswordReEnter(""),
                    setName(""))
                  )
                : toast.success(
                    "New user registered. Now, login with the same credentials.",
                    {
                      position: toast.POSITION.TOP_RIGHT,
                    },
                    (setEmail(""),
                    setPassword(""),
                    setPasswordReEnter(""),
                    setName(""),
                    setTimeout(3000),
                    history.push("/login"))
                  )
            )
            .catch((error) => console.log(error));
        }
      } else {
        toast.error(
          "Check your password and try again.",
          {
            position: toast.POSITION.TOP_RIGHT,
          },
          (setEmail(""), setPassword(""), setPasswordReEnter(""), setName(""))
        );
      }
    }
  };

  return (
    <Wrapper>
      <ToastContainer />
      <div className="card text-light bg-dark shadow p-3 mb-5 rounded">
        <div className="card-header">Sign-Up</div>
        <div className="card-body">
          <p className="card-text">
            <div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3 text-dark">
                    <input
                      type="Text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="John Doe"
                      value={name}
                      required={true}
                      onChange={(evt) => setName(evt.target.value)}
                    />
                    <label for="floatingInput">Full Name</label>
                  </div>
                </div>
                <div className="col">
                  <div class="form-floating mb-3 text-dark">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={email}
                      required={true}
                      onChange={(evt) => setEmail(evt.target.value)}
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                </div>
              </div>
              <div class="form-floating mb-3 text-dark">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  required={true}
                  onChange={(evt) => setPassword(evt.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div class="form-floating mb-3 text-dark">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={passwordReEnter}
                  required={true}
                  onChange={(evt) => setPasswordReEnter(evt.target.value)}
                />
                <label for="floatingPassword">Re-Enter Password</label>
              </div>
              <p className="p-login-register">
                Already have an account? Login <Link to="/login">here</Link>.
              </p>
              <button class="btn btn-primary" onClick={registerClicked}>
                Submit
              </button>
            </div>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
