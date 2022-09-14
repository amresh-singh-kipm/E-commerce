import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  let nagivate = useNavigate();
  // let item = JSON.parse(localStorage.getItem("name"));
  // const [data,setData] = useState(item)
  return (
    <div className="nav">
      <div className="nav__center container">
        <NavLink to="/" className="login">
          Home
        </NavLink>
        <NavLink to="/parentcallback" className="login">
          Hooks
        </NavLink>
        <div className="nav__logo">
          <h1>
            E-<span>CART</span>
          </h1>
        </div>
        <NavLink to="/login" className="login">
          Login
        </NavLink>
        <NavLink to="/cart" className="login">
          cart
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
