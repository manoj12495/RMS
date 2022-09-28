import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../config";

const Payment = () => {
  const navigate = useNavigate();

  const { id } = useParams(); //this is table id from viewbill pay
  // const { state } = useLocation;

//   const [suborderId, setSuborderId] = useState();
  // const [suborderStatus, setSuborderStatus] = useState();
// const[orderId,setOrderId]=useState();


// useEffect(()=>{
//     const { user } = state;
//     setOrderId(user.orderId);
// })

// console.log("order id "+orderId)



  const [paymentType, setPaymentType] = useState([""]);
  // const [tableId, setTableId] = useState();

  const save = (event) => { 
    const body = {
      paymentType,
      tableId: id,
    };
    const url = `${URL}/payment/makePayment`;
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
      {/* <div>Payment</div> */}
      <div className="container">
        <button>
          <Link className="btn btn-primary" to="/billing">
            Back
          </Link>
        </button>
        <div className="w-50 mx-auto shadow p-5">
          <h2 className="text-center mb-5">Payment Mode</h2>
          <div className="form-group" style={{ display: "inline" }}>
          <button class="btn btn-success btn-block"
            style={{ display: "inline" }}
            onClick={(e) => {
              setPaymentType("cash");
            save();
            }}
        
          >
            CASH
          </button>
          <br />
          <br />
          <button
            style={{ display: "inline" }}
            onClick={(e) => {
              setPaymentType("card");
              save();
            }}
          >
            CARD
          </button>
          <br />
          <br />
          <button
            style={{ display: "inline" }}
            onClick={(e) => {
              setPaymentType("upi");
              save();
            }}
          >
            MOBILE PAYMENT
          </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      
    </>
  );
};

export default Payment;
