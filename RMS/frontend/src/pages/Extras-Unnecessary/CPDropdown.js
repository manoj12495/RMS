import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import {URL} from '../../config'

const CPDropdown=()=>{

  const [users, setUser] = useState([]);
  const[states,setStates]=useState([]);
  const numArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  
    const { id } = useParams();
  
    useEffect(() => {
      loadUser();
      handleCategory();
    }, []);
    
    const loadUser = async () => {
     await axios.get(`${URL}/categories`)
            .then(result=>  setUser(result.data))
            .then((error)=>console.log(error));
    };

  const handleCategory=async (e)=>{
    console.log(e.target.value)
    await  axios.get(`${URL}/products`).then((response)=>setStates(response.data.filter((item)=> item.cname.match(e.target.value)))
     .then((error)=>console.log(error)));
  }
  

  return(
    <div style={{flex:4}}>
              <div className='dList'>
                <div>Table Id :  {id}</div>

                  <select className="form-control col-md-3" onChange={e=>handleCategory(e)} >
                    <option value="0">--Select--</option>
                      {users.map((items)=> <option key={items.id} >{items.name}</option>)}
                  </select>
                  <br/>
                  <select className="form-control col-md-3" >
                    <option value="0">--Select--</option>
                      {states.map((item)=> <option key={item.key} value={item.name}>{item.name}</option>)}
                  </select>
                  <br/>
                  <select className="form-control col-md-3" >
                    <option value="0">--Select--</option>
                      {numArray.map((item)=> <option key={item}>{item}</option>)}
                  </select>
                  <br/>
                  <button><Link className="btn btn-primary" to="/orders">
                      back to Home
                    </Link></button>
                  <button >submit</button>
              </div>
    </div>
  );
};

export default CPDropdown;
