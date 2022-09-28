import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { URL } from "../../config";
import Sidebar from "../../components/sidebar/Sidebar";
import { AiOutlineRollback } from "react-icons/ai";
const AddMore = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategories] = useState([]);
  const [productQuantity, setProductQuantity] = useState("");

  const [states, setStates] = useState([]); //for products

  const [orderId, setOrderId] = useState(1);
  const [categoryId, setCategoryId] = useState();

  const [pId, setPId] = useState();

  console.log(orderId);

  const { id } = useParams(); //table id

  useEffect(() => {
    loadUsers();
    // handleCategory();
  }, []);

  const loadUsers = async () => {
    const url = `${URL}/category/all/active`;
    await axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        setCategories(result.data);
      }
    });
  };

  console.log("product id" + pId);

  // const handleProduct = (e) => {
  // console.log("hanlde product"+e.target.value) //coorect value was given
  // setPId(e.target.value)
  // }

  const handleCategory = async (e) => {
    console.log("category id" + e.target.value);
    const url = `${URL}/product/${e.target.value}`;
    await axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        setStates(result.data);
      } else {
        console.log("error");
      }
    });
  };

  console.log("quantity " + productQuantity);

  // "orderId":2,
  // "tableId":5,
  // "productId":5,
  // "productQuantity": 101

  const addOrder = (event) => {
    event.preventDefault();
    const body = {
      orderId,
      tableId: id,
      productId: pId,
      productQuantity,
    };
    // @PostMapping("/order/{tableId}/table")
    const url = `${URL}/order/${id}/table`;
    axios.post(url, body).then((response) => {
      const result = response.data;
      console.log(result);
      if (result["status"] === "success") {
        console.log(result["data"]);
        navigate("/orders");
      }
    });
  };

  return (
    <>
      <Sidebar />
      <div className="container">
        <Link className="btn btn-primary" to="/orders">
          <AiOutlineRollback />
        </Link>
        <div>Table Id : {id}</div>
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add More</h2>
          <div className="form-group">
            <select className="form-control col-md-3" onChange={handleCategory}>
              <option>--Select Category--</option>
              {category.map((item, key) => {
                return (
                  <option key={key} value={item.categoryId}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            <br />
            <br />
            <select
              className="form-control col-md-3"
              // onChange={handleProduct}
              onChange={(e) => setPId(e.target.value)}
            >
              <option>--Product--</option>
              {states.map((item, productId) => {
                return (
                  <option key={productId} value={item.productId}>
                    {item.productName}
                  </option>
                );
              })}
            </select>
            <br />
            <select
              className="form-control col-md-3"
              onChange={(e) => {
                setProductQuantity(e.target.value);
              }}
            >
              <option value="0">--Quantity--</option>
              {/* {quantity.map((item)=> <option name="productQuantity" key={item}>{item}</option>)} */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <br />
            <button onClick={addOrder} className="btn btn-primary btn-block">
              Add Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMore;
