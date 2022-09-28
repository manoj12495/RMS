import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTable, usePagination } from "react-table";
import Pagination from "../../components/pagination/pagination";
import { URL } from "../../config";
import { useNavigate } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";
import "./billing.css";
import { formatTime, formatDate, formatDateAgo } from "../../utils";

//---------
const Billing = () => {
  //search item
  const [searchTerm, setSearchTerm] = useState("");
  const [q, setQ] = useState("");
  // const [searchParam] = useState(["tableId"]);

  //to show pages
  const [showPerPage, setShowPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const { navigate } = useNavigate();
  const [users, setUser] = useState([]);
  const [billing, setBilling] = useState([]);
  const { role } = sessionStorage;


  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    const url = `${URL}/order/active`; //get all orders
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        setBilling(result.data);
      }
    });
  };

  const deleteUser = async (id) => {
    await axios.delete(`${URL}/order/${id}`);
    loadUsers();
  };

  return (
    <>
      <Sidebar />

      <div className="billingList">
        <div className="container">
          <div className="py-4">
            <h1>Billing Page</h1>
            {/* <table class="table border shadow  sticky"> */}
            <table class="table table-success table-striped">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Orders</th>
                  <th scope="col">Table Number</th>
                  <th scope="col">Order Number</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {billing
                  .slice(pagination.start, pagination.end)
                  .map((user, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{user.table.tableId}</td>
                      <td>{user.orderId}</td>
                      {/* <td>{user.orderDateTime}</td> */}
                      <td>
                        {" "}
                        {formatDate(user.orderDateTime)}(
                        {formatTime(user.orderDateTime)})
                      </td>
                      {user.suborder.suborderStatus === 0 ? (
                        <td>Paid</td>
                      ) : (
                        <td>Unpaid</td>
                      )}
                      {(role==="manager" )? 
                    (    <td>
                        <Link
                          class="btn btn-primary mr-2"
                          to={`/billing/viewbill/${user.table.tableId}`}
                        >
                          View-Pay
                        </Link>
                      </td>):
                    (    <td>
                        <Link
                          class="btn btn-primary mr-2"
                          to={`/billing/viewbill/${user.table.tableId}`}
                        >
                          View 
                        </Link>
                      </td>)

                      }
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

export default Billing;
