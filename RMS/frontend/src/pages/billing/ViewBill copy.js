import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import { useTable, usePagination } from 'react-table'
// import './user.css'
import Pagination from '../../components/pagination/pagination'
//---------

const ViewBill=()=>{

  const [users, setUser] = useState([]);
  
  //search item
  const[searchTerm,setSearchTerm]=useState('')

  //to show pages
  const [showPerPage, setShowPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

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
       <div className="userList">
       {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
    {/* <div className="search-bar">
    <input type="text" placeholder='Search....' 
    onChange={(e)=>{
      setSearchTerm(e.target.value)
    }}
    />
    </div> */}
            {/* <button><Link className="btn " to="/trials/add">Add User</Link></button> */}
                <div className="container">
                <div className="py-4">
                    <h1>User Page</h1>
                    <table class="table border shadow  sticky">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col"> Item Name</th>
                        <th scope="col"> Item Quantity</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Amount</th>
                        <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.filter((val)=>{
                    if(searchTerm==""){
                      return val
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val
                    }
                    }).slice(pagination.start, pagination.end).map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>Enable/Disable</td>
                <td>
                  <button             
                  class="btn btn-danger    size=sm"
                  onClick={() => deleteUser(user.id)}>  
                    Delete 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
          <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={users.length}
        />
          </tfoot> */}
                    </table>
                </div>
                </div>
                <button><Link className="btn btn-primary" to="/billing">
                                        Back
                    </Link></button>
       </div>
      
        </>
    )
}

export default ViewBill;