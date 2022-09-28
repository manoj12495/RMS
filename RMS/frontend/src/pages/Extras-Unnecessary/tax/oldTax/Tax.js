import React, { useState,useEffect } from 'react'
import axios from 'axios';
import styles from './tax.module.css'
import Table1 from './Table1'
// import Table2 from './Table2';
// import Table3 from './Table3'
import { Link } from "react-router-dom";


export default function Tax() {
    const [users, setUser] = useState([]);
    // const[tableid,setTableid]=useState('')
    
    const{id}=users;

    useEffect(() => {
        loadUsers();
      }, [id]);
    
      const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/tables");
        setUser(result.data.reverse());
      };

   
    return (
      <>
        <div className={styles.taxList}>
            <div className={styles.tableStatus}>
                <h2>Table Status</h2>
                <table class="table border shadow  sticky">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Table Name</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.
                        map((user, index) => (
                        <tr>
                            <td>{user.name}</td>
                        <td>
                   
                         <button><Link class="btn btn-primary mr-2" to={`/tax/tables/${user.id}`}>
                            View
                        </Link></button> 
                        <button >  Add more</button>
                        </td>
                      
                    </tr>
                    ))}
                    </tbody>
                </table>

           

                            
             </div>

    <div className={styles.orderStatus}>
            <h2>Order Status</h2>
        <div className={styles.orderBox}>

            <Table1 />
            </div>
        </div>
    </div>
      </>
    );
}
