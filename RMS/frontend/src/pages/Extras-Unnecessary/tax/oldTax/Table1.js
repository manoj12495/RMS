import React, { useState, useEffect } from "react";
import {useNavigate,  useParams,Link } from "react-router-dom";
import axios from "axios";

 const Table1=()=> {
  const navigate = useNavigate();
    const [user, setUser] = useState({
      name: "",
      capacity:""
      });
    
      const { id} = useParams();
      const{name,capacity }=user;
    
      useEffect(() => {
        loadUser();
      }, [id,name,capacity]);
    
      const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/tables/${id}`);
        setUser(res.data);
      };

      return (
        <>
       <div className="trials-t">
          <div className="container py-4">
          <button><Link className="btn btn-primary" to="/tax">
            back to Home
          </Link></button>
          <h1 className="display-4">User Id: {id}</h1>
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item">Name: {user.name}</li>
            <li className="list-group-item">Capacity: {user.capacity}</li>
          </ul>

        </div>
       </div>
       </>
      );
    };

export default Table1;