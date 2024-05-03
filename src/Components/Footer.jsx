import React from "react";
import footerStyles from "./footer.module.css";
import logo from "../assets/Logo.jpg";
import "bootstrap-icons/font/bootstrap-icons.min.css";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid">
        <div className="row topFooter">
          <div className={`col-3 ${footerStyles.company}`}>
            <div className="d-flex ">
              <img src={logo} alt="logo" className={footerStyles.logo} />
              <h4 className="my-4">E-Farm</h4>
            </div>
            <p className="ps-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              cum expedita, soluta porro nam natus in
            </p>
          </div>

          <div className="col-3 p-4 ">
            <div className="d-flex ">
              <i className="bi bi-person-walking"></i>
              <h6 className="ms-2 ">Reach Us</h6>
            </div>
            <p>
              Plot no.40 second floor, Vittal Rao Nagar, Madhapur, Telangana
              500081, India
            </p>
          </div>
          <div className="col-3 p-4 ">
            <h6>Contact Us</h6>
            <div>
              <i className="bi bi-telephone"></i>
              <a href="Tel:+917498307474" className="ms-2 ">
                +91 7498307474
              </a>
            </div>
            <div>
              <i className="bi bi-envelope"></i>
              <a href="mailto:mindyourcode@0101.com" className="ms-2 ">
                mindyourcode@0101.com
              </a>
            </div>
          </div>
        </div>
        <div className="row bottomFooter p-3">
          <div className="col-6 text-center fw-semibold ">
            &copy; 2024 Navam
          </div>
          <div className="col-6 text-center fw-semibold ">
            Designed by Navam
          </div>
        </div>
      </footer>
    </>
  );
}
