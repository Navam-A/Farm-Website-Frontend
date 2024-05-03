import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import adminStyles from "./admin.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AddService from "./AddService";
import ManageService from "./ManageService";
import AddOffers from "./AddOffers";
import ManageOffers from "./ManageOffers";
import AddTestimonials from "./AddTestimonials";
import ManageTestimonials from "./ManageTestimonials";
import UpdateContact from "./UpdateContact";
import axios from "axios";
import { tokenContext } from "../App";

export default function AdminDashboard() {
  let [view, setView] = useState("");
  let navigate = useNavigate()
  let [token, setToken] = useContext(tokenContext);

  useEffect(() => {
    axios
      .get("https://farm-website-backend.onrender.com/admindashboard", {
        headers: { "x-token": token },
      })
      .then((res) => {
        if(res.data=="Token is not generated")
        {
          navigate("/admin");
        }
      })
      .catch((err) => console.log(err));
  },[]);

  if (!token) {
    navigate("/admin");
  }

  return (
    <>
      <section>
        <div
          className={`text-white text-center fs-3 fw-bold p-3 ${adminStyles.bgBrown}`}
        >
          Admin
        </div>
      </section>
      <section className={`${adminStyles.dashboard} w-100 `}>
        <div className={`container-fluid `}>
          <div className="row">
            <div className={`col-12 col-md-3 ${adminStyles.adminControl}`}>
              <div className="accordion w-100" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Services
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body d-flex flex-column align-items-center text-center">
                      <NavLink
                        to={"addservice"}
                        className={`btn btn-warning w-75 p-2 m-1`}
                      >
                        Add Service
                      </NavLink>
                      <NavLink
                        to={"manageservice"}
                        className={`btn btn-warning w-75 p-2 m-1`}
                      >
                        Edit / Delete Service
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Offers
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body d-flex flex-column text-center align-items-center">
                      <NavLink
                        to={"addoffers"}
                        className={`btn btn-warning w-75 p-2 m-1`}
                      >
                        Add Offers
                      </NavLink>
                      <NavLink
                        to={"manageoffers"}
                        className={`btn btn-warning w-75 p-2 m-1 m-1`}
                      >
                        Edit / Delete Offers
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Testimonials
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body d-flex flex-column text-center align-items-center">
                      <NavLink
                        to={"addtestimonials"}
                        className={`btn btn-warning w-75 p-2 m-1`}
                      >
                        Add Testimonial
                      </NavLink>
                      <NavLink
                        to={"managetestimonials"}
                        className={`btn btn-warning w-75 p-2 m-1`}
                      >
                        Edit / Delete Testimonial
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Contact Us
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body d-flex flex-column text-center align-items-center">
                      <NavLink
                        to={"updatecontact"}
                        className={`btn btn-warning w-100 p-2 mb-2`}
                      >
                        Update Contacts
                      </NavLink>
                      <NavLink
                        to={"deletecontact"}
                        className={`btn btn-warning w-100 p-2 `}
                      >
                        Delete Contacts
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-12 col-md-9 p-0 d-flex justify-content-center align-items-center `}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
