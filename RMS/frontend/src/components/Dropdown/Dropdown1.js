import React, {useState,useEffect} from 'react'
import axios from 'axios';
import './dropdown.css'
const Dropdown1=()=>{
    const[users,setUsers]=useState([]);
    const[singleUser,setSingleUser]=useState([]);
    useEffect(function ()  {
        axios.get("http://localhost:3003/tables")
        .then((response)=>setUsers(response.data)
        .then((error)=>console.log(error)));
      }, []);
    
     const cChange=(e)=>{
        axios.get("http://localhost:3003/countries/"+ e.target.value)
        .then((response)=>setSingleUser(response.data)
        .then((error)=>console.log(error)));
      }
         {/* <select name="" id="">
                      {users.map((user,key)=> <option key={key} >{user.name}</option>)}
                  </select> */}


    return(
 

                    <div className='dList'>
                    <select className="form-control col-md-3" onChange={(e) => setSingleUser(e.target.value)} >
                            <option value="0">--Select--</option>
                            {
                                users.map((user)=>{
                                    <option key={user.id} value={user.id} >{user.name}</option>
                                })
                            }
                        </select>
                    </div>
                    
    );

};

export default Dropdown1;