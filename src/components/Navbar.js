import React from 'react'
import './Navbar.css'; 
import { Link } from 'react-router-dom'; 

const Navbar = (props) => {
    return (
        <nav>
            <h1>'Business Name'</h1>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li> Basket: <span>{props.basketNumbers}</span></li>
            </ul>
        </nav>
    )
}

export default Navbar
