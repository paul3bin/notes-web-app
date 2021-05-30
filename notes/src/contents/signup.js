import React from "react";
import Nav from "../components/navbar";
import Footer from "../components/landing_footer";

import { Link } from "react-router-dom";

export function SignUp() {
  document.title = "Notes | Sign up";

  return (
    <div className="d-flex h-100 text-center text-white bg-dark bg-gradient">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Nav />

        <div className="card text-light bg-dark shadow p-3 mb-5 rounded">
          <div className="card-header">Sign-Up</div>
          <div className="card-body">
            {/* <h5 className="card-title">Dark card title</h5> */}
            <p className="card-text">
              <form>
                <div class="form-floating mb-3 text-dark">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3 text-dark">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-3 text-dark">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Re-Enter Password</label>
                </div>
                <p className="p-login-register">
                  Already have an account? Login <Link to="/login">here</Link>.
                </p>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
