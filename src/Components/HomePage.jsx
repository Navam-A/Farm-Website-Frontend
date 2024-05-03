import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import axios from "axios";
import styles from "./index.module.css";
import banner from "../assets/banner1.jpg";
import soilTestImg from "../assets/soilTesting.jpg";
import veternaryImg from "../assets/veternaryImg.jpg";
import sales from "../assets/sales.jpg";
import tools from "../assets/tools.jpg";
import TestimonialCard from "./TestimonialCard";
import Service from "./Service";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [offerData, setOfferData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await axios.all([
          axios.get("https://farm-website-backend.onrender.com/services"),
          axios.get("https://farm-website-backend.onrender.com/offers"),
          axios.get("https://farm-website-backend.onrender.com/testimonials"),
        ]);

        setData(responses[0].data);
        setOfferData(responses[1].data);
        setTestimonialData(responses[2].data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section>
        <img src={banner} alt="banner" className="w-100" />
      </section>
      <section className="text-center my-3">
        <h3 className="my-3">Offers!</h3>
        <marquee direction="left" className={"h-100 "}>
          {offerData.map((of) => {
            return (
              <NavLink
                key={of._id}
                className={`d-inline-block w-25 ${styles.card_height} text-center bg-warning p-3 m-2 border border-danger rounded `}
              >
                <h5>{of.title}</h5>
                <p className="w-100 text-wrap ">{of.content}</p>
              </NavLink>
            );
          })}
        </marquee>
      </section>
      <section className="text-center my-3">
        <h3>Services</h3>
        <div className="container position-relative">
          <div className="row ms-5">
            {data.map((sr) => {
              return (
                <Service
                  key={sr._id}
                  img={sr.image}
                  title={sr.title}
                  content={sr.description}
                />
              );
            })}
            <div className={styles.grad}></div>
            <NavLink to={"/services"} className={styles.viewMore}>
              View More
            </NavLink>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <h3 className="text-center my-3">Testimonials</h3>
            {testimonialData.map((ts) => {
              return (
                <div key={ts._id} className="col-6 col-md-3">
                  <TestimonialCard
                    title={ts.title}
                    content={ts.content}
                    name={ts.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
