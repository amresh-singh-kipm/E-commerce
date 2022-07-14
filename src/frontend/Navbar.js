import React,{ useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  let nagivate = useNavigate();
  let item = JSON.parse(localStorage.getItem("name"));
  const [data,setData] = useState(item)
 
 
  return (
    <div className="nav">
    <div className="nav__center container">
    <NavLink to="/" className = "login" >Home</NavLink> 
      <div className="nav__logo">
        <h1>E-<span>CART</span></h1>
      </div>
      
      <ul className="nav__list">
        <button  className="login" onClick={()=>nagivate('/login')}>Login</button>
        
        <div className="cart__icon">
          <button className="login"onClick={()=>nagivate('/cart')} >cart</button>
          <span className="item__total">{data?.length}</span>
        </div>
      </ul>
      
    </div>
  </div>
    
  );
}

export default Navbar;
