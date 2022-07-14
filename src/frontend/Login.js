import React,{useState} from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {useNavigate} from 'react-router-dom';

function Login() {
  const clientId = "807795441363-qjngal7d1m27ib08j4icsjo1gipu5cpv.apps.googleusercontent.com";
  const [showGoogleLogin, setShowGoogleLogin] = useState(true)
  const [showGoogleLogout, setShowGoogleLogout] = useState(false)
  let navigate = useNavigate();

const onSuccessfulLogin = () =>{
  setShowGoogleLogin(false);
  setShowGoogleLogout(true);
  navigate('/')
}
const onSuccessfulLogout =() =>{
  setShowGoogleLogin(true);
  setShowGoogleLogout(false);

}
 const onLoginFailure = ()=>{
  console("login is failed")
 }
 const onLogoutFailure = () =>{
console.log("Logout is  failed")
 }

  return (
    <>
     
     <Navbar/>
     <div className="container">
  
        <div className="row">

         

          <div className="col-lg-8 ">


            <h1>Login</h1>

              
            <form   className="login-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className="form-control" />
              </div>

              <button type="submit" className="btn btn-primary">Log in</button>
              <p>Don't have an account? <NavLink to="/signup">Sign Up Now</NavLink></p>
            </form>
            {showGoogleLogin?
             <GoogleLogin
             clientId={clientId}
             buttonText="SIgnIn"
             onSuccess={onSuccessfulLogin} 
             onFailure={onLoginFailure}
             cookiePolicy={'single_host_origin'}
              />:null
          }
          {showGoogleLogout?
          <GoogleLogout 
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSuccessfulLogout}
          onFailure={onLogoutFailure}
          />:null
        }
           

          </div>
        </div>
        </div>
    </>
  );
}

export default Login;
