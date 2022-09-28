import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTable, usePagination } from "react-table";
import "./viewBill.css";
import Pagination from "../../components/pagination/pagination";
import { useNavigate } from "react-router";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Component } from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
import { URL } from "../../config";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Sidebar from "../../components/sidebar/Sidebar";
import { AiOutlineRollback } from "react-icons/ai";

//---------

const ComponentToPrint = () => {
  let componentRef = useRef();
  const HandlerPrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const { role } = sessionStorage;
  const navigate = useNavigate();
  const { id } = useParams(); //table id
  const [viewBill, setViewBill] = useState([]);
  const [totalAmount, setTotalAmount] = useState();
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    console.log(id);
    const url = `${URL}/order/${id}/detailsontable`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        setViewBill(result.data);
      }
    });
  };

  const TAX_RATE = 0.18;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  function priceRow(qty, unit) {
    return qty * unit;
  }

  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  function subtotal(items) {
    return items
      .map(({ productRate, productQuantity }) => productRate * productQuantity)
      .reduce((sum, i) => sum + i, 0);
  }

  const invoiceSubtotal = subtotal(viewBill);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <>
      <div className="userList py-4 m-4">
        <div ref={componentRef}>
          <div>
            <Link className="btn btn-primary" to="/billing">
              <AiOutlineRollback />
            </Link>
          </div>
          <div className="container">
            <div>
              <h1>Billing Page</h1>
              <table class="table border shadow  sticky">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col"> Item Name</th>
                    <th scope="col"> Item Quantity</th>
                    <th scope="col">Item Rate</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  { viewBill.map((bill, index) => (
                    bill.suborderStatus===1 &&
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{bill.products.productName}</td>
                      <td>{bill.productQuantity}</td>
                      <td>{bill.productRate}</td>
                      <td>
                        {priceRow(bill.productQuantity, bill.productRate)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th rowspan={5} />
                    <th colspan={2}></th>
                    <th>Sub Total</th>
                    <th>{subtotal(viewBill)}</th>
                  </tr>
                  <tr>
                    <td colspan={2} />
                    <td>Tax= {TAX_RATE * 100} %</td>
                    <td>{invoiceTaxes}</td>
                  </tr>

                  <tr>
                    <td colspan={2} />
                    <td>Total Amount</td>
                    <td>{invoiceTotal}</td>
                  </tr>
                </tfoot>
              </table>

            { role==="manager" && <button
                style={{ margin: 15 }}
                class="btn btn-danger size=sm "
                onClick={() => {
                  navigate(`/billing/payment/${id}`, {});
                }}
              >
                Pay
              </button>}
              <button
                className="btn btn-primary size=sm"
                onClick={HandlerPrint}
              >
                Print
              </button>
            </div>
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

export default ComponentToPrint;
