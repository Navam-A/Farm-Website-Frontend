import React, { useEffect, useState } from "react";
import servicesStyles from "./index.module.css";
import Service from "./Service";
import axios from "axios";

export default function Services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://farm-website-backend.onrender.com/services")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className={servicesStyles.bgBrown}>
        <h2 className="text-white text-center p-3">Services</h2>
      </div>
      <div className="container">
        <div className="row">
          {data.map((sr) => {
            return (
              <div key={sr._id} className="col-6 col-md-3">
                <Service
                  img={sr.image}
                  title={sr.title}
                  content={sr.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
