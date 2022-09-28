import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import { useTable, usePagination } from 'react-table'
import Pagination from '../../components/pagination/pagination'
import {Button, Modal, Table} from 'react-bootstrap'
//---------
const Tax=()=>{

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
    const result = await axios.get("http://localhost:3003/tax");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/tax/${id}`);
    loadUsers();
  };




    return(
        <>
       <div className="billingList">
       {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
    <div className="search-bar">
    <input type="text" placeholder='Search....' 
    onChange={(e)=>{
      setSearchTerm(e.target.value)
    }}
    />
    </div>
                <div className="container">
                <div className="py-4">
            <button><Link className="btn " to="/tax/add">Add Tax</Link></button>
           
                    <h1>Tax Page</h1>
                    <table class="table border shadow  sticky">
                    <thead class="thead-dark">
                        <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Tax Name</th>
                        <th scope="col">Tax Percentage</th>
                        <th scope="col">Status</th>
                        <th>Action</th>
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
                {/* <th scope="row">{index + 1}</th> */}
                <td>{user.name}</td>
                <td>{user.percentage}</td>
                <td>{user.status}</td>
                <td>
                  {/* <button><Link class="btn btn-primary mr-2" to={`/tax/${user.id}`}>
                    View
                  </Link></button> */}
                <button>
                <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/tax/edit/${user.id}`}
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
          <tfoot>
          <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={users.length}
        />
          </tfoot>
                    </table>
                </div>
                </div>
       </div>
      
        </>
    )
}

export default Tax;