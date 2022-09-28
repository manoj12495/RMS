import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useTable, usePagination } from "react-table";
import Pagination from "../../components/pagination/pagination";
import { URL } from "../../config";
import { useNavigate } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";

//---------
function Products() {
  const navigate = useNavigate();
  const [users, setUser] = useState([]);

  //search item
  // const [searchTerm, setSearchTerm] = useState("");

  const [q, setQ] = useState("");
  const [searchParam] = useState(["productName"]);
  
  
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
    const url = `${URL}/products`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        setUser(result.data);
      }
    });
  };

  const disableUser = async (productId) => {
    await axios.put(`${URL}/product/${productId}/toggleStatus`);
    loadUsers();
  };

  const deleteUser = async (productId) => {
    await axios.delete(`${URL}/product/${productId}`);
    loadUsers();
  };

  return (
    <>
      <Sidebar />
      <div className="billingList">
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
          <Link className="btn " to="/products/add">
            Add Product
          </Link>
        </button>
        <div className="container">
          <div className="py-4">
            <h1>Product Page</h1>
            {/* <table class="table border shadow  sticky"> */}
            <table class="table table-success table-striped">
              <thead class="thead-dark">
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th scope="col">Sr. No. </th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">Product Category</th>
                  <th scope="col">Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((val) => {
                    return searchParam.some((newVal) => {
                      return (
                        val[newVal]
                          .toString()
                          .toLowerCase()
                          .indexOf(q.toLocaleLowerCase()) > -1
                      );
                    });
                  })
                  .slice(pagination.start, pagination.end)
                  .map((user, index) => (
                    <tr>
                      <th scope="row">{user.productId}</th>
                      <td>{user.productName}</td>
                      <td>{user.price}</td>
                      <td>{user.categoryName}</td>
                      <td>
                        {user.productStatus === 0 ? "Disabled" : "enabled"}
                      </td>
                      <td >
                        <button 
                          onClick={() => {
                            navigate(`/products/edit/${user.productId}`, {
                              state: { user: user },
                            });
                          }}
                          className="btn btn-success"
                        >
                          Edit
                        </button>

                        <button 
                          class="btn btn-secondary  m-1  size=sm"
                          onClick={() => disableUser(user.productId)}
                        >
                          Enable/Disable
                        </button>
                        <button
                          class="btn btn-danger    size=sm"
                          onClick={() => deleteUser(user.productId)}
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

export default Products;
