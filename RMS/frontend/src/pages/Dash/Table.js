import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import './table.css'
// import Pagination from "../../components/pagination/pagination";
import { URL } from "../../config";
import "./salesinfo.css";
import { FaRupeeSign } from "react-icons/fa";

function Table() {
  const [users, setUser] = useState([]);
  const [todaySales, setTodaySales] = useState();
  const [yesterdaySales, setYesterdaySales] = useState();
  const [weeklySales, setWeeklySales] = useState();
  const [totalSales, setTotalSales] = useState();

  useEffect(() => {
    loadUsers();
    todayssales();
    yesterdaysssales();
    weeksSales();
    allTime();
  }, []);

  console.log("today sales:" + todaySales);

  const loadUsers = async () => {
    const url = `${URL}/table/all`;
    await axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log("table details" + result.data);
        setUser(result.data);
      }
    });
  };
  // weeks yesterday year
  const todayssales = () => {
    const url = `${URL}/sale/todays`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log("sales details" + result.data.amount);
        setTodaySales(result.data.amount);
      }
    });
  };
  const yesterdaysssales = () => {
    const url = `${URL}/sale/yesterday`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log("sales details" + result.data);
        setYesterdaySales(result.data);
      }
    });
  };

  const weeksSales = () => {
    const url = `${URL}/sale/weeks`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log("sales details" + result.data);
        setWeeklySales(result.data);
      }
    });
  };
  const allTime = () => {
    const url = `${URL}/sale/alltime`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log("sales details" + result.data);
        setTotalSales(result.data);
      }
    });
  };

  return (
    <>
      <div className="featured text-center">
        <div className="featuredItem  ">
          <span className="featuredTitle ">
            <strong>TODAY SALE</strong>
          </span>
          <div className="featuredMoneyContainer ">
            <span className="featuredMoney ">
              <FaRupeeSign fontSize="1em" />
              <strong>{todaySales}</strong>
            </span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">
            <strong>YESTERDAYS SALE</strong>
          </span>
          <div className="featuredMoneyContainer">
            <FaRupeeSign fontSize="1em" />
            <span className="featuredMoney">
              {" "}
              <strong>{yesterdaySales} </strong>
            </span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">
            <strong>LAST 7 DAYS SALES</strong>
          </span>
          <div className="featuredMoneyContainer">
            <FaRupeeSign fontSize="1em" />
            <span className="featuredMoney">
              <strong>{weeklySales}</strong>
            </span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">
            <strong>ALL TIME SALES</strong>
          </span>
          <div className="featuredMoneyContainer">
            <FaRupeeSign fontSize="1em" />
            <span className="featuredMoney">
              {" "}
              <strong>{totalSales}</strong>{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="tableList">
        <div className="container">
          <div className="py-5">
            <h1>Table Page</h1>
            <table class="table border shadow  sticky">
              {/* <table class="table table-success table-striped"> */}
              <thead
                class="thead-dark text-center"
                style={{ backgroundColor: " #E0FFFF" }}
              >
                <tr>
                  <th>Table Name</th>
                  <th>Table Status</th>
                  <th>Table Capacity</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: " #E0FFFF" }}>
                {users.map((user, index) => (
                  <tr class="text-center ">
                    <td>{user.tableId}</td>
                    {user.tableStatus === 1 ? (
                      <td
                        style={{ backgroundColor: "#FAF0E6" }}
                        // className="bg-success text-white"
                      >
                        Taken
                      </td>
                    ) : (
                      <td style={{ backgroundColor: "rgb(194, 214, 214)" }}>
                        Available
                      </td>
                    )}
                    <td>{user.capacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
