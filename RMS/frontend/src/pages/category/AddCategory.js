import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../../config";
import Sidebar from "../../components/sidebar/Sidebar";
import { AiOutlineRollback } from "react-icons/ai";

function AddCategory() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
  });

  const { name } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${URL}/category/${user.name}`);
    navigate("/categories");
  };

  return (
    <>
      <Sidebar />
      <div className="container">
        <Link className="btn btn-primary" to="/categories">
          <AiOutlineRollback />
        </Link>

        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add Category</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Category Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add Category</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
