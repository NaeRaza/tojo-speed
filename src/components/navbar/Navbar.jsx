import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/mms.png"
import './navbar.css'
import Menu from '../menu/Menu'

function Navbar() {

    return (
        <>
            <Menu/>
            <div className="navbar">
                <Link to="/" className="navbar-logo">
                    <img className="logo" src={Logo} alt="" />
                </Link>
                
                <div className="right">
                    <Link to="/config" className="nav-config">
                        Se connecter
                    </Link>
                </div>
                 
            </div>  
        </>
    )
}

export default Navbar
