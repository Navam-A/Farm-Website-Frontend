import React, { useEffect, useState } from "react";
import testimonialStyle from "./index.module.css";
import TestimonialCard from "./TestimonialCard";
import axios from "axios";

export default function Testimonials() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://farm-website-backend.onrender.com/testimonials")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <div className={testimonialStyle.bgBrown}>
        <h2 className="text-white text-center p-3">Testimonials</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          {data.map((ts) => {
            return (
              <div className="col-6 col-md-3">
                <TestimonialCard
                  key={ts._id}
                  title={ts.title}
                  content={ts.content}
                  name={ts.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
