import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./trials.css";
import { useLocation, useNavigate } from "react-router";
import { URL } from "../../config";
import { AiOutlineRollback } from "react-icons/ai";
const User = () => {
  const [user, setUser] = useState({
    empId: "",
    name: "",
    contactNumber: "",
    email: "",
    aadharNumber: "",
    gender: "",
    salary: "",
    role: "",
    isActive: "",
    joiningDate: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    console.log(id);
    const url = `${URL}/user/${id}`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        setUser(result.data);
      }
    });
  };

  return (
    <>
      <div className="trials-t">
        <div className="container py-4">
          <Link className="btn btn-primary" to="/users">
            <AiOutlineRollback />
          </Link>

          <h1 className="display-4">User Id: {id}</h1>
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item">Name: {user.name}</li>
            <li className="list-group-item">Email: {user.email}</li>
            <li className="list-group-item">
              Contact number: {user.contactNumber}
            </li>
            <li className="list-group-item">
              Aadhar number: {user.aadharNumber}
            </li>
            <li className="list-group-item">Gender: {user.gender}</li>
            <li className="list-group-item">Salary: {user.salary}</li>
            <li className="list-group-item">Role: {user.role}</li>
            <li className="list-group-item">
              Active Status: {user.isActive === 0 ? "Inactive" : "Active"}
            </li>
            <li className="list-group-item">
              Joining date: {user.joiningDate}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default User;
