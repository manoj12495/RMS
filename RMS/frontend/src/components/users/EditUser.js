import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useLocation } from "react-router";
import { URL } from "../../config";
import { AiOutlineRollback } from "react-icons/ai";
const EditUser = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  //const { id } = useParams();
  const [empId, setEmpId] = useState();
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [gender, setGender] = useState([""]);
  const [salary, setSalary] = useState("");
  const [role, setRole] = useState([""]);
  const [isActive, setIsActive] = useState([""]);

  useEffect(() => {
    const { user } = state;
    setEmpId(user.empId);
    setName(user.name);
    setEmail(user.email);
    setAadharNumber(user.aadharNumber);
    setContactNumber(user.contactNumber);
    setGender(user.gender);
    setSalary(user.salary);
    setIsActive(user.isActive);
    setRole(user.role);
  }, []);

  const updateUser = () => {
    const body = {
      name,
      email,
      aadharNumber,
      contactNumber,
      gender,
      salary,
      isActive,
      role,
    };

    axios.post(`${URL}/user/${empId}/details`, body).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result);
        navigate("/users");
      } else {
        navigate("/users");
      }
    });
  };

  return (
    <div className="container">
      <Link className="btn btn-primary" to="/users">
      <AiOutlineRollback />
      </Link>

      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User Details</h2>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Phone Number"
            name="contactNumber"
            value={contactNumber}
            onChange={(e) => {
              setContactNumber(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter Your E-mail Address"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter aadharNumber"
            name="aadharNumber"
            value={aadharNumber}
            onChange={(e) => {
              setAadharNumber(e.target.value);
            }}
          />
        </div>
        <select className="form-group-lg col-md-12 p-2" 
            onClick={(e) => {
              setGender(e.target.value);
            }}
                  >
                    <option value="0" >--Gender--</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
          </select>
        <div className="form-group">
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="Enter salary"
            name="salary"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
            }}
          />
        </div>
        <div>
        <select className="form-group-lg col-md-12 p-2" 
              onClick={(e) => {
                setRole(e.target.value);
              }}
                  >
                    <option value="0">--Role--</option>
                      <option value="admin">Admin</option>
                      <option value="manager">Manager</option>
                      <option value="chef">Chef</option>
          </select>
        </div>
        <div>
        <select className="form-group-lg col-md-12 p-2" 
              onClick={(e) => {
                setIsActive(e.target.value);
              }}
                  >
                    <option value="0">--Status--</option>
                      <option value="1">Active</option>
                      <option value="0">Inactive</option>
          </select>
        </div>
        {/* <div className="form-group">
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="Enter isActive"
            name="isActive"
            value={isActive}
            onChange={(e) => {
              setIsActive(e.target.value);
            }}
          />
        </div> */}
        <button onClick={updateUser} className="btn btn-warning btn-block">
          Update User
        </button>
      </div>
    </div>
  );
};

export default EditUser;
