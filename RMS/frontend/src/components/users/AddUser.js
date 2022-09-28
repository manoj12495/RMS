import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {URL} from '../../config'
import { AiOutlineRollback } from "react-icons/ai";


const AddUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [gender, setGender] = useState([""]);
  const [salary, setSalary] = useState("");
  const [role, setRole] = useState([""]);
  const [password, setPassword] = useState("");

  // const addUser = async () => {
  //   const body = {
  //     name,
  //     contactNumber,
  //     email,
  //     password,
  //     aadharNumber,
  //     gender,
  //     salary,
  //     role,
  //   };

  //   await axios.post(`${URL}/user`, body).then((response) => {
  //     const result = response.data;
  //     if (result["status"] === "success") {
  //       console.log(result);
  //       navigate("/users");
  //     } else {
  //       navigate("/users");
  //     }
  //   });
  // };

  

  const addUser = () => {
    const body = {
      name,
      email,
      aadharNumber,
      contactNumber,
      gender,
      salary,
      password,
      role,
    };

    axios.post(`${URL}/user`, body).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result);
        navigate("/users");
      }
    });
  };


  

  return (
    <div className="container" >

        <Link className="btn btn-primary" to="/users">
        <AiOutlineRollback />
        </Link>
      <div className="w-50 mx-auto shadow p-4">
        <h2 className="text-center mb-4">Add New User Details</h2>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            required
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
            required

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
            required

            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter password"
              name="password"
              value={password}
              required

              onChange={(e) => {
                setPassword(e.target.value);
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
              required

              onChange={(e) => {
                setAadharNumber(e.target.value);
              }}
            />
          </div>
          <div>
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
        </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter gender"
              name="gender"
              value={gender}
              required

              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </div> */}
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg "
              placeholder="Enter salary"
              name="salary"
              value={salary}
              required
              onChange={(e) => {
                setSalary(e.target.value);
              }}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter role"
              name="role"
              value={role}
              onChange={(e) => {
                setRole(e.target.value.toLowerCase);
              }}
            />
          </div> */}
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
        </div>
        <button onClick={addUser} className="btn btn-warning btn-block m-2">
          ADD USER
        </button>
      </div>
    </div>
  );
};

export default AddUser;
