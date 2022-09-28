import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import "./signin.css";
import image from "./photo/restaurent.jpg";
import {URL} from "../../../config"
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
const[name,setName]=useState("");
  const navigate = useNavigate();
//   "id": 1,
//         "name": "Admin",
//         "email": "admin@gmail.com",
//         "role": "admin"

  const signinUser = () => {
    if (email.length === 0) {
      toast.warning("please enter email");
    } else if (password.length === 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
      };

      // url to make signin api call
      const url = `${URL}/signin`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log("user details"+result);
        if (result["status"] === "success") {
          toast.success("Welcome to the application");

          // get the data sent by server
          const { id, email, role,name } = result["data"];

          // persist the logged in user's information for future use
          sessionStorage["id"] = id;
          sessionStorage["name"] = name;
          sessionStorage["email"] = email;
          sessionStorage["role"] = role;
          sessionStorage['loginStatus'] = 1

          // navigate to home component
          navigate("/dash");
        } else {
          toast.error("Invalid user name or password");
          navigate("/signin")
        }
      });
    }
  };


  return (
    <>
      <div
        className="body"
        // style={{
        //   backgroundImage: `url(${image})`,
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <h1 className="title">Signin</h1>

        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="form">
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Email address
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="" className="label-control">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                />
              </div>

              <div className="mb-3" >
                <div style={{color: "red",textAlign: "center"}}>
                  Forgot Password? <Link to="/trials/add" />
                </div>  
                <button onClick={signinUser} className="btn btn-primary" s>
                  Signin
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Signin;
