import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../../config";
import Sidebar from "../../components/sidebar/Sidebar";
import { AiOutlineRollback } from "react-icons/ai";
<AiOutlineRollback />;

function AddTable() {
  const navigate = useNavigate();
  // const [user, setUser] = useState({
  //   // name: "",
  //   tableId:"",
  //   capacity:""
  // });
  const [capacity, setCapacity] = useState();
  // const { capacity } = user;
  // const onInputChange = e => {
  //   setUser({ ...user, [e.target.capacity]: e.target.value });
  // };

  const save = () => {
    const url = `${URL}/table/add/${capacity}`;
    axios.post(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        navigate("/tables");
      }
    });
  };

  return (
    <>
      <Sidebar />

      <div className="container">
        <Link className="btn btn-primary" to="/tables">
          <AiOutlineRollback />
        </Link>
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add Tables</h2>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Table Capacity"
              name="capacity"
              value={capacity}
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
            />
          </div>
          <button onClick={save} className="btn btn-primary btn-block">
            Add Table
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTable;
