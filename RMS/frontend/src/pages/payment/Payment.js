import React, { useState, useEffect } from "react";
import {useLocation } from "react-router";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";


const Payment = () => {


  const navigate = useNavigate();
  const { state } = useLocation;
  const[orderId,setorderId]=useState;

  useEffect(() => {
    addProduct();
  }, [])

const addProduct = (event) => {
  const body = {
    orderId,
  };

  const url = `${URL}/product/${orderId}`;
  axios.post(url, body).then((response) => {
    const result = response.data;
    console.log(result);
    if (result["status"] === "success") {
      console.log(result["data"]);
      navigate("/billing");
    } 
  });
};


  return (
    <>
      <div className="container">
        <button>
          <Link className="btn btn-primary" to="/billing">
            Back
          </Link>
        </button>
        <div className="w-50 mx-auto shadow p-5" >
          <h2 className="text-center mb-5">Payment Mode</h2>
          <div className="form-group" style={{display: "inline"}}>
            <br />
            <br />
            <button 
            >
              CASH
            </button>
            <br />
            <br />
            <button className= "btn btn-primary "
            //   onClick={() => {
            //     navigate(`/orders/add/${item.tableId}`, {
            //       state: { id: item.tableId },
            //     });
            //   }}
            >
             CARD
            </button>
            <br />
            <br />
            <button className= "btn btn-primary " 
            //   onClick={() => {
            //     navigate(`/orders/add/${item.tableId}`, {
            //       state: { id: item.tableId },
            //     });
            //   }}
            >
              ONLINE PAYMENT
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
