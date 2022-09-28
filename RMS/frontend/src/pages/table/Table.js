import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../Extras-Unnecessary/pagination";
import { URL } from "../../config";
import { useNavigate } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";
import "./table.css";

const Table=()=> {
  const navigate = useNavigate();

  const [users, setUser] = useState([]);

  //search item
  // const [searchTerm, setSearchTerm] = useState("");
  const [q, setQ] = useState("");
  const [searchParam] = useState(["tableId"]);

  //to show pages
  const [showPerPage, setShowPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    const url = `${URL}/table/all`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        setUser(result.data);
      }
    });
  };

  const deleteTable = async (tableId) => {
    await axios.delete(`${URL}/table/${tableId}`);
    loadUsers();
  };


  return (
    <>
      <Sidebar />

      <div className="tableList">
        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
        <div className="search-bar">
          <input
            type="search"
            name="search-form"
            placeholder="Search...."
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
            }}
          />
        </div>
        <button>
          <Link className="btn " to="/tables/add">
            Add Table
          </Link>
        </button>
        <div className="container">
          <div className="py-4">
            <h1>Table Page</h1>
            {/* <table class="table border shadow  sticky"> */}
            <table class="table table-success table-striped">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Table Name</th>
                  <th scope="col">Table Capacity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((val) => {
                    return searchParam.some((newVal)=>{
                      return(
                        val[newVal].toString().toLowerCase().indexOf(q.toLocaleLowerCase()) >-1
                      );
                    }); 
                  })
                  .slice(pagination.start, pagination.end)
                  .map((user) => (
                    <tr>
                      <td>{user.tableId}</td>
                      <td>{user.capacity}</td>
                      <td>
                        <button
                          onClick={() => {
                            navigate(`/tables/edit/${user.tableId}`, {
                              state: { id: user.tableId },
                            });
                          }}
                          className="btn btn-success m-1"
                        >
                          Edit
                        </button>

                        <button
                          class="btn btn-danger    size=sm"
                          onClick={() => deleteTable(user.tableId)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                <Pagination
                  showPerPage={showPerPage}
                  onPaginationChange={onPaginationChange}
                  total={users.length}
                />
              </tfoot>
            </table>
            {/* <select name="" id="">
              {users.map((user, index) => (
                <option value="">{user.name}</option>
              ))}
            </select> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
