
import axios from "axios";
import { Link, useNavigate,useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function AddProduct() {
  const navigate = useNavigate();
  const [category, setCategories] = useState([]);
  const [name, setName] = useState('')
  const [price, setPrice] = useState()
  const [cat, setCat] = useState();

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
    handleCategory();
  }, []);

  // const data= ()=>{
  //   name ,
  //   price
  // }

   const loadUsers = () => {
    const url = `http://localhost:8080/category/all`
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] === 'success') {
        console.log(result.data)
        setCategories(result.data)
      }
    })
  }

  // const handleCategory=  (e)=>{
  //   console.log(e);
  //   setCat(e.target.value)
  //   //this.setState({ [e.target.name]: e.target.value });
  //   console.log(cat)
  // }

  const handleCategory=async (e)=>{
    console.log(e.target.value)
    await  axios.get(`http://localhost:8080/products/${e.target.value}`)
     .then((error)=>console.log(error));
  }


  const addProduct = () => {
      const body = {
       name,
       price,
      }
      // url to call the api
      const url = `http://localhost:8080/product/${cat.id}`

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data
        console.log(result)
        if (result['status'] === 'success') {
         
          navigate('/products')
        } else {
          navigate('/products')
        }
      })
    }


  return (
    <div className="container">
      <button>
        <Link className="btn btn-primary" to="/products">
          back to Products
        </Link>
      </button>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Product</h2>
        
          <div className="form-group">
          <br/>
              <select className="form-control col-md-3" onChange={e=>handleCategory(e)} >
                <option >--Select category--</option>
                  {category.map((item)=> <option value={item.id}>{item.name}</option>)}
              </select>
            <br/>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              // name="name"
               value={name}
              // onChange={(e) => onInputChange(e)}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter ProductPrice"
              // name="price"
              value={price}
              // onChange={(e) => onInputChange(e)}
              onChange={(e) => {
                setPrice(e.target.value)
              }}
            />
          </div>
          <button onClick={addProduct} className="btn btn-primary btn-block">Add product</button>
        
      </div>
    </div>
  );
}

export default AddProduct;
