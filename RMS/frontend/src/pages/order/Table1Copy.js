import React, { useState, useEffect } from "react";
import {useNavigate,  useParams,Link } from "react-router-dom";
import axios from "axios";
import {URL} from '../../config'

 const Table1Copy=()=> {
  const navigate = useNavigate();
    const [users, setUser] = useState();
    // const [users, setUser] = useState({
    //   name: "",
    //   quantity:"",
    //   productRate:""
    //   });
    
      const { id} = useParams();
      const{name,quantity,productRate }=users;
    
      useEffect(() => {
        loadUser();
      }, []);
      // useEffect(() => {
      //   loadUser();
      // }, [id,quantity,productRate]);

      const loadUser = () => {
        const url = `${URL}/order/${id}`;
        axios.get(url).then((response) => {
          const result = response.data;
          if (result["status"] === "success") {
            console.log(result.data);
            setUser(result.data);
          }
        });
      };

        
    const deleteUser = async id => {
      await axios.delete(`${URL}/order/${id}`);
      loadUser();
    };


  

      return (
        <>
       <div className="trials-t">
          <div className="container py-4">
          <button><Link className="btn btn-primary" to="/tax">
            back to Home
          </Link></button>
          <h1 className="display-4">User Id: {id}</h1>
     <table class="table border shadow  sticky">
                    <thead class="thead-dark">
                        <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col"> Item Name</th>
                        <th scope="col"> Quantity</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Amount</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users
                     .map((item ) => (
              <tr>
                {/* <th scope="row">{index + 1}</th> */}
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.productRate}</td>
                <td>{(item.quantity)*(item.productRate)}</td>
                <td>
                  <button             
                  class="btn btn-danger    size=sm"
                  onClick={() => deleteUser(item.id)}
                  >  
                    Delete 
                  </button>
                </td>
              </tr>
             ))} 
          </tbody>
          <tfoot>
          {/* <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={users.length}
        /> */}
          </tfoot>
                    </table>
        </div>
       </div>
       </>
      );
    };

export default Table1Copy;