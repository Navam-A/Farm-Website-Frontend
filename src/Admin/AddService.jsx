import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import serviceStyles from "./admin.module.css";

export default function AddService() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  let addService = (e) => {
    e.preventDefault();
    axios
      .post("https://farm-website-backend.onrender.com/service", { title, description, image })
      .then(() => {
        alert("Service added Successfully!");
        setTitle("");
        setDescription("");
        setImage("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={`w-75 ${serviceStyles.viewBg}`}>
      <form className="" onSubmit={addService}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control fw-bold my-3"
            id="floatingTitle"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="floatingTitle">Title</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className={`form-control ${serviceStyles.max_height} my-3`}
            id="floatingDescription"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="floatingDescription">Description</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control my-3"
            id="floatingImage"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="floatingImage">Image</label>
        </div>
        <button type="submit" className={`btn btn-warning my-3 `}>
          Upload
        </button>
      </form>
    </div>
  );
}
