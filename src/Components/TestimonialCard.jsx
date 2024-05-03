import React from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import testimonialStyles from "./index.module.css"

export default function TestimonialCard({ title, content, name }) {
  return (
    <div className="card w-20 text-center p-3 m-2">
      <div className="card-body p-0">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <strong>{name}</strong>
      </div>
    </div>
  );
}
