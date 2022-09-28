import React from "react";
import "./topbar.css";
import "./wallpaper.jpg";
export default function topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {/* <span className="logo">Taj Restaurant</span> */}
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">Usersssssss</div> */}
          <span className="logo" style={{color: 'DC143C'}}>Taj Restaurant</span>
        </div>

        <div class="dropdown">
          {/* <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button> */}
          <ul
            class="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a class="dropdown-item active" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
