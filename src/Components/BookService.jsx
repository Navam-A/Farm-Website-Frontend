import React, { useState } from "react";
import axios from "axios";
import bookingStyle from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function BookService() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  let handleUpdate = (e) => {
    e.preventDefault();
    axios
      .post("https://farm-website-backend.onrender.com/contactus", {
        name,
        email,
        phone,
        address,
        service,
        message,
      })
      .then((res) => {
        alert("Request Send");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setService("");
        setMessage("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={bookingStyle.bgBrown}>
        <h2 className="text-white text-center p-3">Book Service</h2>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center align-content-center ">
          <form
            onSubmit={handleUpdate}
            className="border-1 w-25 m-4 p-3  border rounded border-2 border-warning"
          >
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control fw-bold "
                id="floatingTitle"
                placeholder="Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="floatingTitle">Phone</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control fw-bold "
                id="floatingTitle"
                placeholder="Title"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="floatingTitle">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control fw-bold "
                id="floatingTitle"
                placeholder="Title"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingTitle">Email</label>
            </div>
            <select
              className="form-select mb-3 "
              aria-label="Default select example"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option defaultValue={""}>Select a service</option>
              <option value="Soil Testing">Soil Testing</option>
              <option value="Veternary">Veternary</option>
              <option value="Tools">Tools</option>
            </select>
            <div className="form-floating mb-3">
              <textarea
                type="text"
                className="form-control h-25"
                id="floatingTitle"
                placeholder="Title"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label htmlFor="floatingTitle">Message</label>
            </div>
            <div className="d-flex justify-content-center align-content-center ">
              <button
                type="submit"
                className={`${bookingStyle.yellowButton} w-75 `}
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
