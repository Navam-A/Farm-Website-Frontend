import React from "react";
import serviceStyle from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";

export default function Service({ img, title, content }) {
  return (
    <div
      className={`card col-6 col-md-3 w-100 p-0 m-3 ${serviceStyle.width_18}`}
    >
      <div className={`card ${serviceStyle.width_18} h-100 `}>
        <img src={img} className="card-img-top" alt="cardImg" />
        <div className="card-body d-flex flex-column justify-content-center align-content-center ">
          <h5 className="card-title">{title}</h5>
          <p className={`card-text ${serviceStyle.cardText} my-3 `}>{content}</p>
          <NavLink to="#" className={`my-3  ${serviceStyle.yellowButton} text-center `}>
            Know more!
          </NavLink>
        </div>
      </div>
    </div>
  );
}
