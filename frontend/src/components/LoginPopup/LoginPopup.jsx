import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { useEffect } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { useContext } from 'react';

const LoginPopup = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext);
    //  const {url} = useContext(StoreContext)
     const [currState, setCurrState] = useState('Sign Up');
     const [data, setData] = useState({
       name: "",
       email: "",
       password: "",
     });

     const onChangeHandler = (event) => {
       const name = event.target.name;
       const value = event.target.value;
       setData(data => ({ ...data, [name]: value }));
     }

     const onLogin = async (event) => {
       event.preventDefault();
       let newUrl = url;
       if(currState === "Login"){
          newUrl += "/api/user/login";
       }
       else{ 
        newUrl += "/api/user/register"; 
      }
       const response = await axios.post(newUrl, data);
       if(response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setShowLogin(false);
       }else{
         alert(response.data.message);
       }
     }

     useEffect(() => {
       console.log("data in useEffect: "+JSON.stringify(data)); // Log the data);
     }, [data])
  return (
    <div className="login-popup">
      <form action="" onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState === "Login"?<></>:<input type="text" placeholder="Your name" onChange={onChangeHandler} value={data.name} name="name" required />}
             <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Your email" required />
             <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Password" required />
        </div>
        <button type="submit">{currState==="Sign Up"? "Create account": "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>BY CONTINUING, YOU AGREE TO THE <span>TERMS OF SERVICE</span> AND <span>PRIVACY POLICY</span></p>
        </div>
        
        {currState === "Login"?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p> :  <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p> }
       
      </form>
    </div>
  )
}

export default LoginPopup