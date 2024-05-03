import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import contactStyles from "./admin.module.css";
import axios from "axios";

export default function UpdateContact() {
  const [data, setData] = useState([]);
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [service, setService] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  let [message, setMessage] = useState("");
  let [status, setStatus] = useState("");

  let handleUpdate = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://farm-website-backend.onrender.com/sendmail/${username}/${email}/${service}/${phone}/${address}/${message}/${status}`
      )
      .then(() => {
        alert("Mail send Succesfully");
      })
      .catch((err) => console.log(err));
    console.log(status);
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
              <th className="col-4">Email</th>
              <th className="col-4">Phone</th>
              <th className="col-3">Address</th>
              <th className="col-3">Service</th>
              <th className="col-3">Message</th>
              <th className="col-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ct, index) => {
              return (
                <tr key={ct._id} className={`${contactStyles.text_justify}`}>
                  <td scope="row">{index + 1}</td>
                  <td>{ct.name}</td>
                  <td>{ct.email}</td>
                  <td>{ct.phone}</td>
                  <td>{ct.address}</td>
                  <td>{ct.service}</td>
                  <td>{ct.message}</td>
                  <td className="d-flex ">
                    <select
                      className="border-1 rounded"
                      onChange={(e) => {
                        setUsername(ct.name);
                        setEmail(ct.email);
                        setService(ct.service);
                        setPhone(ct.phone);
                        setAddress(ct.address);
                        setMessage(ct.message);
                        setStatus(e.target.value);
                      }}
                    >
                      <option>Pending</option>
                      <option value="process">Processing</option>
                      <option value="success">Succesfull</option>
                    </select>
                    <button
                      className="btn btn-success w-100 m-1 "
                      onClick={handleUpdate}
                    >
                      Update
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
