// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import {URL} from '../../config'
// // import './trials.css'


// const User = () => {
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phone: ""
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const loadUser = async () => {
//     const res = await axios.get(`${URL}/order/${id}`);
//     setUser(res.data);
//   };
//   return (
//     <>
//    <div className="trials-t">
//       <div className="container py-4">
//       <button><Link className="btn btn-primary" to="/orders">
//         back to Home
//       </Link></button>
//       <h1 className="display-4">User Id: {id}</h1>
//       <hr />
//       <ul className="list-group w-50">
//         <li className="list-group-item">name: {user.name}</li>
//         <li className="list-group-item">user name: {user.username}</li>
//         <li className="list-group-item">email: {user.email}</li>
//         <li className="list-group-item">phone: {user.phone}</li>

//       </ul>
//     </div>
//    </div>
//    </>
//   );
// };

// export default User;
