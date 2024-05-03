import React, { useContext, useEffect, useState } from "react";
import adminStyles from "./admin.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { tokenContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  let [token, setToken] = useContext(tokenContext);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://farm-website-backend.onrender.com/login", { email, password })
      .then((res) => {
        setToken(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (token) {
      navigate("/admindashboard");
    }
  });

  return (
    <div className={adminStyles.bgImg}>
      <div className="container" id={adminStyles.center}>
        <div className="row">
          <div className="text-center p-3 fs-3 fw-bold">Admin Login</div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-dark-subtle  border border-danger-subtle  p-4 "
            >
              <div className="mb-3 form-group">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
