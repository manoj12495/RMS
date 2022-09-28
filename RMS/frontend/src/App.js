import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'

import Signin from "./pages/Home/signIn/index";
import Signup from "./pages/Home/signUp/index";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Dash from "./pages/Dash/Home";

import AllOrders from "./pages/order/AllOrders";
import AddOrder from "./pages/order/AddMore";
import AddProduct from "./pages/products/AddProduct";



import Category from "./pages/category/Category";
import AddCategory from "./pages/category/AddCategory";
import EditCategory from "./pages/category/EditCategory";


import Table from "./pages/table/Table";
import AddTable from "./pages/table/AddTable";
import EditTable from "./pages/table/EditTable";

import Product from "./pages/products/Products";
import EditProduct from "./pages/products/EditProduct";

import Billing from "./pages/billing/BillingCopy";
import ViewBill from "./pages/billing/ViewBill";

import Payment from "./components/Payment/Payment";

import AllUser from "./pages/userList/User";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

const AuthorizeUser = () => {
  const loginStatus = sessionStorage["loginStatus"];
  return loginStatus === "1" ? <Sidebar /> : <Signin />;
};

function App() {
  return (
   <>
    <BrowserRouter>
      <Topbar />
      <div className="side">
        <Routes>
      
          <Route exact path="/" element={<AuthorizeUser />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/dash" element={<Dash />} />

          <Route path="/categories" element={<Category />} />
          <Route path="/categories/add" element={<AddCategory />} />
          <Route path="/categories/edit/:id" element={<EditCategory />} />

          <Route path="/tables" element={<Table />} />
          <Route path="/tables/add" element={<AddTable />} />
          <Route path="/tables/edit/:id" element={<EditTable />} />

          <Route path="/products" element={<Product />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />


          <Route path="/orders" element={<AllOrders />} />
          <Route path="/orders/:id" element={<AllOrders />} />
          <Route path="/orders/add/:id" element={<AddOrder />} />

          <Route path="/billing" element={<Billing />} />
          <Route path="/billing/viewbill/:id" element={<ViewBill />} />
          <Route path="/billing/payment/:id" element={<Payment />} />

          <Route path="/users" element={<AllUser />} />
          <Route exact path="/trials/add" element={<AddUser />} />
          <Route exact path="/trials/edit/:id" element={<EditUser />} />
          <Route exact path="/trials/:id" element={<User />} />

        </Routes>
      </div>
    </BrowserRouter>
    <ToastContainer theme="colored" />
   </>
  );
}

export default App;
