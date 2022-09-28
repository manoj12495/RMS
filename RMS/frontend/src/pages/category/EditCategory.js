import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { URL } from "../../config";
import { useLocation } from "react-router";
import { AiOutlineRollback } from "react-icons/ai";
<AiOutlineRollback />
const EditCategory = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();
  console.log(id);
  const [name, setName] = useState("");

  useEffect(() => {
    const { user } = state;
    setName(user.name);
  }, []);

  const onSubmit = async (e) => {
    const body = {
      name,
    };
    e.preventDefault();
    await axios.post(`${URL}/category/${id}/update`, body);
    navigate("/categories");
  };

  return (
    <div className="container">
      <Link className="btn btn-primary" to="/categories">
        <AiOutlineRollback />
      </Link>
      <div className="w-75 mx-auto shadow p-5 ">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter new Category"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <button className="btn btn-warning btn-block">Update Category</button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
