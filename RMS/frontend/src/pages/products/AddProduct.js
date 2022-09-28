import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { URL } from "../../config";
import Sidebar from "../../components/sidebar/Sidebar";
import { AiOutlineRollback } from "react-icons/ai";
function AddProduct() {
  const navigate = useNavigate();
  const [category, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();

  const [item, setItem] = useState();

  // load the data in the beginning
  useEffect(() => {
    loadUsers();
    handleCategory();
  }, []);

  const loadUsers = () => {
    const url = `${URL}/category/all`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        console.log(result.data);
        setCategories(result.data);
      }
    });
  };

  const handleCategory = (e) => {
    console.log(e);
  };
  const addProduct = (event) => {
    const body = {
      name,
      price,
    };

    const url = `${URL}/product/${categoryId}`;
    // http method: post
    // body: contains the data to be sent to the API
    axios.post(url, body).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] === "success") {
        console.log(result["data"]);
        // setCategories(result['data'])
        navigate("/products");
      } else {
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
          <h2 className="text-center mb-4">Add Product</h2>

          <div className="form-group">
            <br />

            <select
              className="form-control col-md-3"
              // onSelect={e=>handleCategory(e)}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option>--Select Category--</option>
              {category.map((item, key) => {
                return (
                  <option name="item" value={item.id} key={key}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <br />

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="name"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter ProductPrice"
              name="price"
              value={price}
              required
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <button onClick={addProduct} className="btn btn-primary btn-block">
              Add product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
