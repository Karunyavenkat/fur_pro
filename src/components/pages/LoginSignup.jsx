import React,{useState} from "react";
import './LoginSignup.css';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const LoginSignup=()=>
{
  const[menu,setMenu] = useState("shop");
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <center><h1>LOGIN</h1></center>
                <div className="logindignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                    
                </div>
                <button>Continue</button><br></br>
                <center><p className="loginsignup-login">Don't have an account? <span><Link to='/Signup'>Click Here</Link></span></p></center>
                <div className="loginsignup-agree">
                {/* <Link to='/login'><button onMouseOver={()=>{setMenu("login")}}>Login</button></Link> */}
                <input type="checkbox" name='' id=''/>
                <p>By Clicking, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
            
        </div>
    )
}

export default LoginSignup;