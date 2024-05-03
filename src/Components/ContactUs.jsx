import React, { useState } from "react";
import contactStyle from "./index.module.css";
import axios from "axios";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = (e)=>{
    e.preventDefault()
    axios.post("https://farm-website-backend.onrender.com/contactus", {name, email, phone, address, message})
    .then(()=>{
      alert("Request send")
    })
    .catch((err)=> console.log(err))
  }

  return (
    <>
      <div className={contactStyle.bgBrown}>
        <h2 className="text-white text-center p-3">Contact Us</h2>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center align-content-center ">
          <form onSubmit={handleSubmit} className="border-1 w-25 m-4 p-3  border rounded border-2 border-warning">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control fw-bold "
                id="floatingTitle"
                placeholder="Title"
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
              <label htmlFor="floatingTitle">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control fw-bold "
                id="floatingTitle"
                placeholder="Title"
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
              />
              <label htmlFor="floatingTitle">Phone</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control fw-bold "
                id="floatingTitle"
                placeholder="Title"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
              <label htmlFor="floatingTitle">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control fw-bold "
                id="floatingTitle"
                placeholder="Title"
                value={address}
                onChange={(e)=> setAddress(e.target.value)}
              />
              <label htmlFor="floatingTitle">Address</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                type="text"
                className="form-control h-25"
                id="floatingTitle"
                placeholder="Title"
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
              />
              <label htmlFor="floatingTitle">Message</label>
            </div>
            <div className="d-flex justify-content-center align-content-center ">
              <button
                type="submit"
                className={`${contactStyle.yellowButton} w-75 `}
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
