import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useTable, usePagination } from "react-table";
import "./user.css";
import Pagination from "../../components/pagination/pagination";
import {  useNavigate } from "react-router";
import {URL} from '../../config'
import Sidebar from "../../components/sidebar/Sidebar"


const User = () => {
  const{role}=sessionStorage;
  const [users, setUser] = useState([]);
  const navigate = useNavigate();
  //search item
  const [searchTerm, setSearchTerm] = useState("");

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
    const url = `${URL}/user/all`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        setUser(result.data);
      }
    });
  };

  const deactivateUser = (id) => {
    const url = `${URL}/user/${id}/delete`;
    axios.patch(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        //setUser(result.data);
        loadUsers();
      }
    });
  };
  const deleteUser = (id) => {
    const url = `${URL}/user/${id}/delete`;
    axios.delete(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        //setUser(result.data);
        loadUsers();
      }
    });
  };

  return (
    <>
    <Sidebar />
      <div className="userList">
        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search...."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <button>
          <Link className="btn " to="/trials/add">
            Add User
          </Link>
        </button>
        <div className="container">
          <div className="py-4">
            <h1>User Page</h1>
            {/* <table class="table border shadow  sticky"> */}
            <table class="table table-success table-striped">

              <thead class="thead-dark">
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th scope="col"> User Name</th>
                  <th scope="col"> User Contact</th>
                  <th scope="col">User Email</th>

                  <th scope="col">User Role</th>
                  <th scope="col">Joining date</th>
                  <th scope="col">User Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .slice(pagination.start, pagination.end)
                  .map((user, index) => (
                    <tr>
                      {/* <th scope="row">{index + 1}</th> */}
                      <td>{user.name}</td>
                      <td>{user.contactNumber}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.joiningDate}</td>
                      <td>{user.isActive === 0 ? "Inactive" : "Active"}</td>
                      <td>
                        <Link
                          class="btn btn-success m-1 size=sm"
                          to={`/trials/${user.empId}`}
                        >
                          View
                        </Link>
                        <button
                          onClick={() => {
                            navigate(`/trials/edit/${user.empId}`, {
                              state: { user: user },
                            });
                          }}
                          className="btn btn-primary"
                        >
                          Edit
                        </button>

                        <button
                          class="btn btn-secondary m-1   size=sm"
                          onClick={() => deactivateUser(user.empId)}
                        >
                          Deactivate
                        </button>
                        {(user.role==="manager" || user.role==="chef" )&& <button
                          class="btn btn-danger m-1   size=sm"
                          onClick={() => deleteUser(user.empId)}
                        >
                          Delete
                        </button>}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
