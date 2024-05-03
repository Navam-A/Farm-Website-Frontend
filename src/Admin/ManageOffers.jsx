import React, { useEffect, useState } from "react";
import offersStyles from "./admin.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

export default function ManageOffers() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let [Id, setId] = useState("");
  let [data, setData] = useState([]);

  let editOffers = (id) => {
    axios
      .get(`https://farm-website-backend.onrender.com/offers/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => console.log(err));
  };

  let handleUpdate = () => {
    axios
      .put(`https://farm-website-backend.onrender.com/offer/${Id}`, {
        title,
        content,
      })
      .then(() => {
        alert("Offer updated Successfully!");
      })
      .catch((err) => console.log(err));
  };

  let deleteOffer = (id) => {
    axios
      .delete(`https://farm-website-backend.onrender.com/Offer/${id}`)
      .then(() => {
        alert("Offer deleted Successfully!");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://farm-website-backend.onrender.com/offers")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <>
      <div className={`w-100 ${offersStyles.viewBg} p-2`}>
        <table className="table ">
          <thead>
            <tr className="text-center">
              <th className="col-1">Sr No</th>
              <th className="col-2">Title</th>
              <th className="col-4">Content</th>
              <th className="col-2">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((of, index) => {
              return (
                <tr key={of._id} className={`${offersStyles.text_justify}`}>
                  <th scope="row">{index + 1}</th>
                  <td>{of.title}</td>
                  <td>{of.content}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary  "
                      onClick={() => {
                        setId(of._id);
                        editOffers(of._id);
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#updateModal"
                    >
                      <i className="bi bi-pencil-square "></i>
                    </button>
                    <button
                      className="btn btn-danger "
                      onClick={() => {
                        deleteOffer(of._id);
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
                Update Offer
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
