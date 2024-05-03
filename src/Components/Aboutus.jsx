import React from "react";
import aboutImg from "../assets/aboutImg.jpg";
import aboutStyles from "./index.module.css";

export default function Aboutus() {
  return (
    <div>
      <div className={`${aboutStyles.bgBrown} text-center fs-3`}>
        <h2 className="text-white p-3 ">About Us</h2>
      </div>
      <div className="container">
        <div className="row">
          <p className={`${aboutStyles.text_justify}`}>Welcome to our website! We are a dedicated team of educators and service providers, passionate about sharing our knowledge and expertise with our community. Our mission is to empower individuals and businesses with the skills and resources they need to succeed in today's ever-changing world. Whether you're looking to learn a new skill, improve your existing knowledge, or take your business to the next level, we're here to help. With a range of teaching and service-based offerings, we're committed to providing high-quality solutions tailored to your unique needs and goals. Join us on our journey of learning and growth, and discover how we can help you achieve your dreams.</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center ">
            <img src={aboutImg} alt="aboutImg" className="w-75"/>
          </div>
          <div className="col-md-8 p-3 ">
            <h2 className="p-2">What we do ?</h2>
            <p className="p-2">At our farming organization, we are dedicated to empowering the next generation of farmers, scientists, and leaders in the agriculture industry. We believe that agriculture is more than just planting and harvesting - it's a science, a business, and an art. That's why we offer a range of teaching and services, from educational workshops and consulting to farm products and event hosting. </p>
            <p className="p-2">Our mission is to provide high-quality, sustainable farming solutions while helping our members develop their unique talents and explore diverse career pathways in agriculture.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
