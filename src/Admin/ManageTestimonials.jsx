import React, { useEffect, useState } from "react";
import testimonialStyles from "./admin.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

export default function ManageTestimonials() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let [Id, setId] = useState("");
  let [data, setData] = useState([]);

  let editTestimonial = (id) => {
    axios
      .get(`https://farm-website-backend.onrender.com/testimonials/${id}`)
      .then((res) => {
        setName(res.data.name);
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => console.log(err));
  };

  let handleUpdate = () => {
    axios
      .put(`https://farm-website-backend.onrender.com/testimonial/${Id}`, {
        name,
        title,
        content,
      })
      .then(() => {
        alert("Testimonial updated Successfully!");
      })
      .catch((err) => console.log(err));
  };

  let deleteOffer = (id) => {
    axios
      .delete(`https://farm-website-backend.onrender.com/testimonial/${id}`)
      .then(() => {
        alert("Testimonial deleted Successfully!");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://farm-website-backend.onrender.com/testimonials")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <>
      <div className={`w-100 ${testimonialStyles.viewBg} p-2`}>
        <table className="table ">
          <thead>
            <tr className="text-center">
              <th className="col-1">Sr No</th>
              <th className="col-2">Name</th>
              <th className="col-2">Title</th>
              <th className="col-4">Content</th>
              <th className="col-2">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ts, index) => {
              return (
                <tr key={ts._id} className={`${testimonialStyles.text_justify}`}>
                  <th scope="row">{index + 1}</th>
                  <td>{ts.name}</td>
                  <td>{ts.title}</td>
                  <td>{ts.content}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary  "
                      onClick={() => {
                        setId(ts._id);
                        editTestimonial(ts._id);
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#updateModal"
                    >
                      <i className="bi bi-pencil-square "></i>
                    </button>
                    <button
                      className="btn btn-danger "
                      onClick={() => {
                        deleteOffer(ts._id);
                      }}
                    >
                      <i className="bi bi-trash3 "></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="updateModal"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title ps-2 " id="exampleModalLabel">
                Update Testimonial
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <label htmlFor="floatingInput">Title</label>
                </div>
                <div className="form-floating mb-3 ">
                  <textarea
                    type="text"
                    className="form-control h-25 "
                    id="floatingContent"
                    placeholder="content"
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                      console.log(content);
                    }}
                  />
                  <label htmlFor="floatingContent">Content</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleUpdate}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
