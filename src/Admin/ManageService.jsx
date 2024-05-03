import React, { useEffect, useState } from "react";
import updateStyles from "./admin.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

export default function UpdateService() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  let [Id, setId] = useState("");
  let [data, setData] = useState([]);

  let editService = (id) => {
    axios
      .get(`https://farm-website-backend.onrender.com/services/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setImage(res.data.image);
      })
      .catch((err) => console.log(err));
  };

  let handleUpdate = () => {
    axios
      .put(`https://farm-website-backend.onrender.com/service/${Id}`, {
        title,
        description,
        image
      })
      .then((res) => {
        alert("Service updated Successfully!");
      })
      .catch((err) => console.log(err));
  };

  let deleteService = (id) => {
    axios
      .delete(`https://farm-website-backend.onrender.com/service/${id}`)
      .then(() => {
        alert("Service deleted Successfully!");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://farm-website-backend.onrender.com/services")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <>
      <div className={`${updateStyles.viewBg} p-2 table-responsive`}>
        <table className="table" >
          <thead>
            <tr className="text-center">
              <th className="">Sr No</th>
              <th className="">Title</th>
              <th className="">Description</th>
              <th className="">Image</th>
              <th className="">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((sr, index) => {
              return (
                <tr key={sr._id} className={`${updateStyles.text_justify}`}>
                  <td scope="row">{index + 1}</td>
                  <td>{sr.title}</td>
                  <td>{sr.description}</td>
                  <td>{sr.image}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary  "
                      onClick={() => {
                        setId(sr._id);
                        editService(sr._id);
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#updateModal"
                    >
                      <i className="bi bi-pencil-square "></i>
                    </button>
                    <button
                      className="btn btn-danger "
                      onClick={() => {
                        deleteService(sr._id);
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
                Update Service
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
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Title</label>
                </div>
                <div className="form-floating mb-3 ">
                  <textarea
                    type="text"
                    className="form-control h-25 "
                    id="floatingDescription"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label htmlFor="floatingDescription">Description</label>
                </div>
                <div className="form-floating ">
                  <input
                    type="url"
                    className="form-control"
                    id="floatingImage"
                    placeholder="Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                  <label htmlFor="floatingImage">Image</label>
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
