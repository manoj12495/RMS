import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate,  useParams,Link } from "react-router-dom";



const EditTax = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    percentage:"",
    status:""
  });

  const { name, percentage,status } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/tax/${id}`, user);
    navigate("/tax");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/tax/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
     
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Tax</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
           <label htmlFor="">Tax Name:</label>
           <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Tax Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Tax Percentage"
              name="percentage"
              value={percentage}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter status"
              name="status"
              value={status}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-warning btn-block">Update Tax</button>
          <button><Link className="btn btn-primary" to="/tax">
     Back
      </Link></button>
        </form>
      </div>
    </div>
  );
};

export default EditTax;
