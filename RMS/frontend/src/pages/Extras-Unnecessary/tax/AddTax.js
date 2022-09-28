import React, { useState } from "react";
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';

const AddTax = () => {
    
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    percentage:"",
    status:""
  });

  const { name, percentage,status } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/tax", user);
    navigate("/tax");
  };
  return (
    <div className="container">
   
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Tax</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
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
              placeholder="Enter Tax percentage"
              name="percentage"
              value={percentage}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Tax Status"
              name="status"
              value={status}
              onChange={e => onInputChange(e)}
            />
          </div> */}
          <button className="btn btn-primary btn-block">Add Tax</button>
          <button><Link className="btn btn-primary" to="/tax">
        back to Home
      </Link></button>
        </form>
      </div>
    </div>
  );
};

export default AddTax;
