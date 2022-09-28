import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Adminsignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");

  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const validate = (event) => {
    event.preventDefault();
    //   const navigate=useNavigate();
    if (email.length == 0) {
      toast.warning("please enter email");
    } else if (password.length == 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
        //   role,
      };

      // url to make signin api call
      const url = `${URL}/user/signin`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        console.log(result.status1);
        if (result["status"] === "success") {
          toast.success("Welcome to the application");

          // console.log("status " + status1);

          const { id, name, role, status1 } = result["data"];
          console.log("role " + role);
          console.log("status " + status1);

          if (role === "admin") {
            // persist the logged in user's information for future use
            sessionStorage["id"] = id;
            sessionStorage["name"] = name;
            sessionStorage["role"] = role;
            sessionStorage["loginStatus"] = 1;
            navigate("/adminHome");
          } else {
            navigate("/userHome");
            // persist the logged in user's information for future use
            sessionStorage["id"] = id;
            sessionStorage["name"] = name;
            sessionStorage["role"] = role;
            sessionStorage["loginStatus"] = 1;
          }
        } else {
          toast.error("Invalid user name or password");
        }
      });
    }

    const SignIn = () => {
      if (username.length === 0) {
        toast.warning("please enter username");
      } else if (password.length === 0) {
        toast.warning("please enter password");
      }
    };

    return (
      <>
        <div className="body">
          <div className="row justify-content-center">
            <div className="col-md-4" id="lf">
              <h2> Login </h2>{" "}
              <form onSubmit={SignIn}>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />{" "}
                <input
                  type="password"
                  placeholder="password"
                  className="form-control"
                  // value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <input
                  type="submit"
                  className="btn btn-primary button form-control"
                  value="Login"
                />
                <hr />
                <button
                  className="btn btn-success button"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  SignUp{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
          </div>
        </div>{" "}
      </>
    );
  };
};

export default Adminsignin;
