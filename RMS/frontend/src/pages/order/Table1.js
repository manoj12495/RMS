import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../../components/pagination/pagination";
import { URL } from "../../config";
import { useLocation } from "react-router";

const Table1 = () => {
  //to show pages
  const [showPerPage, setShowPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  //
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState();
  const [suborder, setSuborder] = useState([]);
  const [noOrder, setNoOrder] = useState(["null"]);
  const { role } = sessionStorage;
  const [suborderStatus, setSuborderStatus] = useState();
  // const{name,productQuantity,productRate }=suborder;

  const { state } = useLocation();

  console.log("state " + state);
  const [takenStatus, setTakenStatus] = useState(0);
  const { id } = useParams(); //got the order id:tableId
  console.log("table id" + id);

  useEffect(() => {
    loadUsers1();
  }, [id]);

  const loadUsers1 = async () => {
    console.log("table id" + id);
    const url = `${URL}/order/${id}/detailsontable`; //get order by tableId
    await axios.get(url).then((response) => {
      const result = response.data;
      console.log("result=" + result.data);
      if (result["status"] === "success") {
        console.log("orderId result" + result.data.orderId);
        setSuborder(result.data);
        
        // loadUsers();
      } else if (result["status"] === "error") {
        setSuborder([]);
      }
    });
  };
  const deleteUser = async (id) => {
    await axios.delete(`${URL}/order/${id}`);
    loadUsers1();
  };

  const addSuborderStatus = (id) => {
    // @PostMapping("/order/{tableId}/table")
    const url = `${URL}/order/${id}/complete`;
    axios.put(url).then((response) => {
      const result = response.data;
      console.log(result);
      if (result["status"] === "success") {
        console.log(result["data"]);
        loadUsers1();
        window.location.reload(false);
      }
    });
  };

  console.log("table status" + suborder.tableStatus);
  return (
    <>
      <div className="trials-t">
        <div className="container py-1">
        <h3>Order Details</h3>
          <h4>Table Id: {id}</h4>
          <hr />
          {/* <table class="table border shadow  sticky"> */}
          <table class="table table-success table-striped">
            <thead class="thead-dark">
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col"> Item Name</th>
                <th scope="col"> Quantity</th>
                <th scope="col">Rate</th>
             {(role!=="chef") &&   <th>Action</th>}
                <th>Status</th>
              </tr>
            </thead>

            {/* <th scope="row">{index + 1}</th> */}
            <tbody>
              {suborder.map((user) => (
                // {user.suborderId!=null&&(
                <tr key={user.suborderId}>
                  <td>{user.products.productName}</td>
                  <td value={user.productQuantity}>{user.productQuantity} </td>
                  <td value={user.productRate}>{user.productRate}</td>
                  {/* <td>{(user.quantity)*(user.productRate)}</td> */}
             
                  {role !== "chef" ? (
                    user.suborderStatus === 0 ? (
                      <td>
                        <button
                          class="btn btn-danger    size=sm"
                          onClick={() => deleteUser(user.suborderId)}
                        >
                        Delete
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button> --- </button>
                      </td>
                    )
                  ) : (
                    <td>
                 {user.suborderStatus ===1 ? 'Taken':'Pending'}
                    </td>
                  )}
                  {role === "chef" ? (
                    user.suborderStatus === 0 ? (
                      <td>
                        <button
                          class="btn btn-danger    size=sm"
                          onClick={() => addSuborderStatus(user.suborderId)}
                        >
                          Take Order
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button> Taken </button>
                      </td>
                    )
                  ) : (
                    <td>
                 {user.suborderStatus ===1 ? 'Taken':'Pending'}
                    </td>
                  )}

                  {/* {(role !=="chef") && (
                    <td>
                      <button
                        class="btn btn-danger    size=sm"
                        onClick={() => deleteUser(user.suborderId)}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                  {((role === "chef") && (user.suborderStatus===0))  ? 
                   ( <td>
                      <button
                        class="btn btn-danger    size=sm"
                        onClick={() => addSuborderStatus(user.suborderId)}
                      >
                        Take Order
                      </button>
                    </td>):
                 (   <td>
                      <button>
                       Taken
                      </button>
                    </td>)
                  } */}
                </tr>
              ))}
            </tbody>
            {/* <tfoot>
              <Pagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={suborder.length}
              />
            </tfoot> */}
          </table>
        </div>
      </div>
    </>
  );
};

export default Table1;
