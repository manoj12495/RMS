import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./category.css";
// import Pagination from '../Extras/pagination'
import Pagination from "../../components/pagination/pagination";
import { URL } from "../../config";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate } from "react-router";
// import GlobalFilter from "../../components/search/SearchBar"

function Category() {
  const navigate = useNavigate();
  const [users, setUser] = useState([]);

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
    const url = `${URL}/category/all`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        setUser(result.data);
      }
    });
  };

  const deleteUser = async (id) => {
    await axios.delete(`${URL}/category/${id}`);
    loadUsers();
  };

  const disableUser = async (id) => {
    await axios.put(`${URL}/category/${id}/toggleStatus`);
    loadUsers();
  };

  return (
    <>
      <Sidebar />

      <div className="billingList">
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
          <Link className="btn " to="/categories/add">
            Add Category
          </Link>
        </button>
        <div className="container">
          <div className="py-1">
            <h1>Category Page</h1>
            {/* <table class="table border shadow  sticky"> */}
            <table class="table table-success table-striped">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Status </th>
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
                  .map((user) => (
                    <tr>
                      <th scope="row">{user.id}</th>
                      <td>{user.name}</td>
                      <td>
                        {user.categoryStatus === 0 ? "Disabled" : "enabled"}
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            navigate(`/categories/edit/${user.id}`, {
                              state: { user: user },
                            });
                          }}
                          className="btn btn-success m-1"
                        >
                          Edit
                        </button>
                        {/* <button>
                          <Link
                            class="btn btn-success"
                            to={{
                              pathname: `/categories/edit/${user.id}`,
                              state: user.id,
                            }}
                          >
                            Edit
                          </Link>
                        </button> */}
                        {/* <button
                          onClick={() => {
                            navigate(`/tables/edit/${user.tableId}`, {
                              state: { id: user.tableId },
                            });
                          }}
                          className="btn btn-success m-1"
                        >
                          Edit
                        </button> */}

                        <button
                          class="btn btn-secondary m-1  size=sm"
                          onClick={() => disableUser(user.id)}
                        >
                          Enable/Disable
                        </button>

                        <button
                          class="btn btn-danger    size=sm"
                          onClick={() => deleteUser(user.id)}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
