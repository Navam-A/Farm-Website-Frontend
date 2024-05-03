import React from "react";
import headerStyle from "./header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

export default function Header() {
  return (
    <nav className=" navbar navbar-expand-lg bg-body-tertiary p-0 ">
      <div className={`container-fluid ${headerStyle.header}`}>
        <NavLink className="navbar-brand d-flex text-decoration-none text-dark" to="/">
          <img src={Logo} className={headerStyle.logo} />
          <h2 className="py-3">E-Farm</h2>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className={`navbar-nav ${headerStyle.ul}`}>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-disabled="true" to={"/bookservice"}>
                Book Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-disabled="true" to={"/testimonials"}>
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-disabled="true" to={"/contactus"}>
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
