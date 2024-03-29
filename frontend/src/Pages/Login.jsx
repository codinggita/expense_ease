import React from 'react'
import './CSS/Login.css'
import { useState } from 'react';
/* import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; */

const Login = () => {

  const [state, setState] = useState("Login");
  /* state for saving input field data */
  const [formData, setFormData] = useState({
    username: "",
    password:"",
    email:""
  })

 /*  getting the data from the input field */
 const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]: e.target.value})
 }

 /*  Adding API for login/signup page */
  
 const login = async() => {
  console.log("Login successful", formData);
  let responseData;
  await fetch('http://localhost:4000/login',{
    method: "POST",
    headers:{
      Accept: 'application/form-data',
      'Content-Type':'application/json',
    },
    body: JSON.stringify(formData),
  }).then((response) => response.json()).then((data) => responseData = data)

  if(responseData.success){
    localStorage.setItem('auth-token', responseData.token);
    /* sending user to homepage */
    window.location.replace("/");
  }
  else{
    alert(responseData.errors);
  }
 }

 const signup = async() => {
  console.log("Sign Up successful",formData);
  let responseData;
  await fetch('http://localhost:4000/signup',{
    method: "POST",
    headers:{
      Accept: 'application/form-data',
      'Content-Type':'application/json',
    },
    body: JSON.stringify(formData),
  }).then((response) => response.json()).then((data) => responseData = data)

  if(responseData.success){
    localStorage.setItem('auth-token', responseData.token);
    /* sending user to homepage */
    window.location.replace("/");
  }
  else{
    alert(responseData.errors);
  }
 }

  return (
    <div className="login">
      <div className="login-container">
      <h1>{state}</h1>
        <div className="login-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />: <></>}
          <input name='email' value= {formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick = {() => {state==="Login"? login(): signup()}}>Continue</button>
        {state === "Sign Up" ? <p className="already">Already have an account? <span onClick={() => {setState("Login")} }> Login </span></p> : 
        <p className="already">Create an account? <span onClick={() => {setState("Sign Up")}}> Click here </span></p>}
        <div className="agree">
          <input className ="checkbox" type="checkbox" name=" " id="" />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
       </div>
      </div>
    </div>
  )
}

export default Login
