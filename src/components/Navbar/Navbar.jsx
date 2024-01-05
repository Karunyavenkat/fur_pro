import React,{useState} from "react";
import './Navbar.css';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import { Link } from "react-router-dom";
 
const Navbar = () =>{
    const[menu,setMenu] = useState("shop");
    return(
        <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" style={{height:'50px',width:'50px'}}/>
            <p>FURNITURE</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("chair")}}><Link style={{textDecoration:'none'}} to='/Chair'>Product</Link>{menu==="chair"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("faqs")}}><Link style={{textDecoration:'none'}} to='/FAQs'>FAQs</Link>{menu==="faqs"?<hr/>:<></>}</li>
            {/* <li onClick={()=>{setMenu("sofa")}}><Link style={{textDecoration:'none'}} to='/Sofa'>Sofa</Link>{menu==="sofa"?<hr/>:<></>}</li> */}
        </ul>
        <div className="nav-login-cart">
        <Link to='/login'><button onMouseOver={()=>{setMenu("login")}}>Login</button></Link>
        <Link to='/signup'><button onMouseOver={()=>{setMenu("signup")}}>Signup</button></Link>
            <Link to='/cart'><img src={cart} alt="" style={{height:'40px',width:'40px'}}/></Link>
            <div className="nav-cart-count">0</div>
        </div>
        </div>
    )
}
export default Navbar;