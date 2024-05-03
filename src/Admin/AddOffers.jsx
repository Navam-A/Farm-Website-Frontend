import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import offerStyles from "./admin.module.css";

export default function AddOffers() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let addOffer = (e) => {
    e.preventDefault();
    axios
      .post("https://farm-website-backend.onrender.com/offer", { title, content })
      .then(() => {
        alert("Offer added Successfully!");
        setTitle("");
        setContent("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={`w-75 ${offerStyles.viewBg}`}>
      <form className="" onSubmit={addOffer}>
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
            className={`form-control ${offerStyles.max_height} my-3`}
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
