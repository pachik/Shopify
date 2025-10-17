import React, { useContext } from 'react'
import "./navbar.css"
import logo from "../../assets/shopify-logo.png"
import cart from "../../assets/cart.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu, setMenu] = useState("home")
    const {getTotalCartItems }=useContext(ShopContext)
    return (
        <div className='navbar'>
            <Link style={{textDecoration:'none'}} to='/'>
            <div className="nav-logo">

                <img src={logo} alt=""  height="50px" />
                <p>Shopify</p>
               
            </div>
             </Link>

            <ul className='nav-menu' >
                <li onClick={() => { setMenu("home") }}><Link style={{textDecoration:"none", color:"#626262"}} to="/">Home</Link>{menu === "home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link style={{textDecoration:"none", color:"#626262"}} to="/mens">Mens</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{textDecoration:"none", color:"#626262"}} to="/womens">Womens</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{textDecoration:"none", color:"#626262"}} to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>

            <div className="nav-login-cart">
              <Link to="/loginsignup">  <button>Login</button></Link>
             <Link to="/cart">   <img src={cart} art=""  height="30px" /></Link>
                <div className="nav-cart-count">{getTotalCartItems ()}</div>
            </div>


        </div>
    )
}

export default Navbar
