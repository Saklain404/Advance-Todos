import React from "react";
import './Login.css';

function Login(props) {
  
   

  return (
    <div> 
    <form className="login" onSubmit={props.submitEvent}>
      <h5 className="wlcm">Welcome</h5>
      <div>
      <div className="username">Username: </div>
      <input 
      className="inputBox" 
      type="text"  
      value={props.name} 
      onChange={props.onChangeName} 
      placeholder="Username"/>
      </div>
      <div>
      <div className="password">Password:  </div>
      <input 
      className="inputBox" 
      type="text" 
      value={props.password} 
      onChange={props.onChangePassword}  
      placeholder="Password"/>
      </div>
      <button onClick={props.submitEvent} className="loginBtn">Log In</button>
      
    </form>
    {props.invalid ? <h5>
      Username or Password is Invalid!</h5> : "" } 
      </div>
  );
}

export default Login;
