import React, { useEffect, useState } from "react";
import contactStyles from "./admin.module.css";
import axios from "axios";

export default function DeleteContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  let [Id, setId] = useState("");
  let [data, setData] = useState([]);

  let deleteContact = (id) => {
    axios
      .delete(`https://farm-website-backend.onrender.com/contactus/${id}`)
      .then(() => {
        alert("Contact deleted Successfully!");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://farm-website-backend.onrender.com/contactus")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <>
      <div className={`w-100 ${contactStyles.viewBg} p-2`}>
        <table className="table ">
          <thead>
            <tr className="text-center">
              <th className="col-1">Sr No</th>
              <th className="col-2">Name</th>
              <th className="col-2">Email</th>
              <th className="col-4">Phone</th>
              <th className="col-4">Address</th>
              <th className="col-4">Service</th>
              <th className="col-4">Message</th>
              <th className="col-2">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ts, index) => {
              return (
                <tr key={ts._id} className={`${contactStyles.text_justify}`}>
                  <th scope="row">{index + 1}</th>
                  <td>{ts.name}</td>
                  <td>{ts.email}</td>
                  <td>{ts.phone}</td>
                  <td>{ts.address}</td>
                  <td>{ts.service}</td>
                  <td>{ts.message}</td>
                  <td>
                    <button
                      className="btn btn-danger "
                      onClick={() => {
                        deleteContact(ts._id);
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
    </>
  );
}
