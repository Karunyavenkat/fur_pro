import React,{useState} from "react";
import './Signup.css';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const Signup=()=>
{
  const[menu,setMenu] = useState("shop");
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <center><h1>Signup</h1></center>
                <div className="logindignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                    
                </div>
                <button>Continue</button><br></br>
                <center><p className="loginsignup-login">Already have an account? <span>Click Here</span></p></center>
                <div className="loginsignup-agree">
                {/* <Link to='/login'><button onMouseOver={()=>{setMenu("login")}}>Login</button></Link> */}
                <input type="checkbox" name='' id=''/>
                <p>By Clicking, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Signup;