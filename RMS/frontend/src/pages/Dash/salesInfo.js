// import "./salesinfo.css";
// import React, { useState, useEffect } from "react";
// import { URL } from "../../config";
// import { axios } from "axios";

// const Salesinfo=  ()=>  {
//   const [todaySales, setTodaySales] = useState();
//   const [yesterdaySales, setYesterdaySales] = useState();
//   const [weeklySales, setWeeklySales] = useState();

//   console.log("today sales:" + todaySales);
//   useEffect(() => {
//     // loadUsers();
//     sales();
//   }, []);

//   const sales = async() => {
//     const url = `${URL}/sale/todays`;
//     await axios.get(url).then((response) => {
//       const result = response.data;
//       if (result["status"] === "success") {
//         console.log("sales details"+result.data.amount);
//         setTodaySales(result.data.amount);
//       }
//     });
//   };


//   return (
//     <>
//       <div className="featured">
//         <div className="featuredItem">
//           <span className="featuredTitle">TODAY SALES</span>
//           <div className="featuredMoneyContainer">
//             <span className="featuredMoney">100</span>
//           </div>
//         </div>
//         <div className="featuredItem">
//           <span className="featuredTitle">YESTERDAY SALES</span>
//           <div className="featuredMoneyContainer">
//             <span className="featuredMoney">100</span>
//           </div>
//         </div>
//         <div className="featuredItem">
//           <span className="featuredTitle">LAST 7 DAYS SALES</span>
//           <div className="featuredMoneyContainer">
//             <span className="featuredMoney">100</span>
//           </div>
//         </div>
//         <div className="featuredItem">
//           <span className="featuredTitle">ALL TIME SALES</span>
//           <div className="featuredMoneyContainer">
//             <span className="featuredMoney">100</span>
//           </div>
//         </div>
//       </div>
//       <br />
//     </>
//   );
// };

// export default Salesinfo;
