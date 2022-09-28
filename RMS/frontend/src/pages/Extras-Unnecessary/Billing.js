import axios from 'axios';
import React, { useState,useEffect } from 'react'
import './billing.css'
import { Link } from "react-router-dom";
import { GlobalFilter } from '../../components/filter/GlobalFilter'



const Billing=()=>{

    const [users, setUser] = useState([]);

    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:3003/trials");
      setUser(result.data.reverse());
    };
  
    const deleteUser = async id => {
      await axios.delete(`http://localhost:3003/trials/${id}`);
      loadUsers();
    };

    return(
        <>
       <div className="billingList">
      
                    <button><Link className="btn " to="/trials/add">Add User</Link></button>
                <div className="container">
                <div className="py-4">
                    <h1>Home Page</h1>
                    <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button><Link class="btn btn-primary mr-2" to={`/trials/${user.id}`}>
                    View
                  </Link></button>
                <button>
                <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/trials/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                </button>
                  <button             
                  class="btn btn-danger    size=sm"
                  onClick={() => deleteUser(user.id)}>
                  
                    Delete
                
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
                    </table>
                </div>
                </div>
       </div>
        

        </>
    )
}

export default Billing;