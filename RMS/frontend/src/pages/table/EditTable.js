import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router";
import { URL } from "../../config";
import Sidebar from "../../components/sidebar/Sidebar";
import { AiOutlineRollback } from "react-icons/ai";

const EditTable = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // const { id } = useParams();

  const [capacity, setCapacity] = useState();

  const update = () => {
    const body = {
      capacity,
    };

    const url = `${URL}/table/${state.id}/update`;
    axios.post(url, body).then((response) => {
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
          <h2 className="text-center mb-4">Edit A Table</h2>

          <div className="form-group"></div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter New Capacity"
              name="capacity"
              value={capacity}
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
            />
          </div>
          <button onClick={update} className="btn btn-warning btn-block">
            Update Table
          </button>
        </div>
      </div>
    </>
  );
};

export default EditTable;
