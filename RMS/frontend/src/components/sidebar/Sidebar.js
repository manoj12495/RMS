import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import {
  MdChair,
  MdProductionQuantityLimits,
  MdAttachMoney,
  MdBorderColor,
  MdPlaylistAddCheck,
} from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";





const Sidebar = () => {
  const navigate = useNavigate();

  const{role}=sessionStorage;

  const logoutUser = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("loginStatus");

    // navigate to sign in component
    navigate("/signin");
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper p-1">
        <div className="sidebarMenu p-1">
          <h2 className="sidebarTitle">HOME</h2>
        {role=== "admin" &&    
            <ul className="sidebarList p-1">
            <li className="sidebarListItem  ">
              <MdPlaylistAddCheck color="black" fontSize="1.4em" />
              <Link to="/dash">
                <strong>Dashboard</strong>
              </Link>
            </li>
            <li className="sidebarListItem">
              <BiCategoryAlt color="black" fontSize="1.4em" />
              <Link to="/categories">
                <strong> Category</strong>
              </Link>
            </li>
            <li className="sidebarListItem">
              <MdChair color="black" fontSize="1.4em" />
              <Link to="/tables">
                <strong>Table</strong>
              </Link>
            </li>

            <li className="sidebarListItem">
              <MdProductionQuantityLimits color="black" fontSize="1.4em" />
              <Link to="/products">
                {" "}
                <strong>Product</strong>
              </Link>
            </li>

            <li className="sidebarListItem">
              <FaUserTie color="black" fontSize="1.4em" />
              <Link to="/users">
                {" "}
                <strong>User</strong>
              </Link>
            </li>
            <li className="sidebarListItem">
              <MdBorderColor color="black" fontSize="1.4em" />
              <Link to="/orders">
                {" "}
                <strong>Order</strong>
              </Link>
            </li>
            <li className="sidebarListItem p-1">
            <MdAttachMoney color="black" fontSize="1.4em" />
              <Link to="/billing">
                {" "}
                <strong>Billing</strong>
              </Link>
            </li>
          </ul>
        }
        {
          role==="manager" &&
          <ul>
          <li className="sidebarListItem">
              <MdBorderColor color="black" fontSize="1.4em" />
              <Link to="/orders">
                {" "}
                <strong>Order</strong>
              </Link>
            </li>
            <li className="sidebarListItem p-1">
            <MdAttachMoney color="black" fontSize="1.4em" />
              <Link to="/billing">
                {" "}
                <strong>Billing</strong>
              </Link>
            </li>
          </ul>
        }
        {
          role==="chef" &&
          <ul>
          <li className="sidebarListItem">
              <MdBorderColor color="black" fontSize="1.4em" />
              <Link to="/orders">
                {" "}
                <strong>Order</strong>
              </Link>
            </li>
          </ul>
        }
          <hr />

          <button className="dropdown-item">
            <CgProfile color="black" fontSize="1.4em" />
            <strong>Hello, {sessionStorage.name}</strong>
          </button>
          <hr />

          <button onClick={logoutUser} className="dropdown-item">
            <RiLogoutBoxLine color="black" fontSize="1.4em" />
            <strong> Logout</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
