import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import testimonialsStyles from "./admin.module.css";

export default function AddTestimonials() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let addTestimonial = (e) => {
    e.preventDefault();
    axios
      .post("https://farm-website-backend.onrender.com/testimonial", { title, content, name })
      .then(() => {
        alert("Testimonial added Successfully!");
        setTitle("");
        setName("");
        setContent("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={`w-75 ${testimonialsStyles.viewBg}`}>
      <form className="" onSubmit={addTestimonial}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control fw-bold my-3"
            id="floatingName"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingName">Name</label>
        </div>
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
            className={`form-control ${testimonialsStyles.max_height} my-3`}
            id="floatingContent"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <label htmlFor="floatingContent">Content</label>
        </div>
        <button type="submit" className={`btn btn-warning my-3 `}>
          Upload
        </button>
      </form>
    </div>
  );
}
