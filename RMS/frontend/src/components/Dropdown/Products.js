import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Select from "react-select";
import Products1 from './Products1'
import { Link } from 'react-router-dom';
const Products=()=>{

  const [users, setUser] = useState([]);
  const [current, setCurrent] = useState(null);
  const[data,setData]=useState(null)
    const{id}=users;

    useEffect(function ()  {
      axios.get("http://localhost:3003/countries")
      .then((response)=>setUser(response.data)
      .then((error)=>console.log(error)));
    }, []);
  
  
    const mapSelect = () => {
      const mapped = users.map((item) => ({
          label: item.name,
          value: item.id,
      }));
      return mapped;
  };
  const handleChange = (element) => {
    setCurrent(element);
    setData(parseInt(element.value));
};
  

  return(
    <div style={{flex:4}}>
              <div className='dList'>
            <Select
            options={mapSelect()}
            onChange={handleChange}
            value={current}
            placeholder="Select value"
            isSearchable
        /> 
        <Products1 />
              </div>
              <Products1 />
    </div>
  );
};

export default Products;
