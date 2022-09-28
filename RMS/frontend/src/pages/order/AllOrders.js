import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./AllOrders.module.css";
import Table1 from "./Table1";
import Table2 from "./Table1Copy";
import { URL } from "../../config";
import { useNavigate } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";
import { yellow } from "@mui/material/colors";

// import { Link } from "react-router-dom";
// import { Button } from 'bootstrap';
// import ViewOrder from './ViewOrder'

export default function AllOrders() {
  const navigate = useNavigate();
  const [tables, setTable] = useState([]);
  const [orderId, setOrderId] = useState();
  const{role}=sessionStorage;


  // const[tableid,setTableid]=useState('')

  const { id } = tables;

  useEffect(() => {
    loadUsers();
  }, [id]);

  // @PostMapping("/order/{tableId}/table")

  const loadUsers = () => {
    const url = `${URL}/table/all`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        setTable(result.data);
      }
    });
  };

  return (
    <>
      <Sidebar />
      <div className={styles.taxList}>
        <div className={styles.tableStatus}>
          <h3 className="py-3">Table Status</h3>
          <table class="table border shadow  sticky">
            <thead class="thead-dark">
              <tr>
                <th scope="col" class="text-center" >Table Name</th>
                <th scope="col" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: " #99ccff" }}>
              {tables.map((item) => (
                <tr  class="text-center ">
                  {console.log("map table status" + item.tableStatus)}
                  {item.tableStatus === 1 ? (
                    <td style={{ backgroundColor: "rgb(244,164,96)" }}>
                      <strong>{item.tableId}</strong>
                    </td>
                  ) : (
                    <td style={{ backgroundColor: "rgb(194, 214, 214)" }}>
                      {item.tableId}
                    </td>
                  )}
                  <td  class="text-center ">
                    <button className="m-3"
                      onClick={() => {
                        navigate(`/orders/${item.tableId}`, {
                          state: { item: item },
                        });
                      }}
                    >
                      View
                    </button>
                    {role==="manager" &&
                      <button
                      onClick={() => {
                        navigate(`/orders/add/${item.tableId}`, {
                          state: { id: item.tableId },
                        });
                      }}
                    >
                      Add More
                    </button>}
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.orderStatus}>
          <div className={styles.orderBox}>
            <Table1 />
            {/* <Table2 />  */}
          </div>
        </div>
      </div>
    </>
  );
}
