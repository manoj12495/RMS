import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useLocation } from "react-router";
import { URL } from "../../config";
import Sidebar from "../../components/sidebar/Sidebar";
import { AiOutlineRollback } from "react-icons/ai";
const EditProduct = () => {
  const navigate = useNavigate();
  const { state } = useLocation("");
  const { id } = useParams(); //this is productId
  console.log("products " + state);

  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [productId, setProductId] = useState();

  useEffect(() => {
    const { user } = state;
    console.log("user" + user);
    setName(user.productName);
    setPrice(user.price);
    setProductId(user.productId);
  }, [id]);

  // {{URL}}/product/2/update
  const update = () => {
    const body = {
      name,
      price,
    };
    const url = `${URL}/product/${productId}/update`;
    axios.post(url, body).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        navigate("/products");
      }
    });
  };

  return (
    <>
      <Sidebar />
      <div className="container">
        <Link className="btn btn-primary" to="/products">
          <AiOutlineRollback />
        </Link>

        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A Product</h2>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button onClick={update} className="btn btn-warning btn-block">
            Update Product
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
