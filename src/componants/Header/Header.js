import React from 'react';
import './Header.css';
import  logo  from '../images/logo.png';
const Header = () => {
    return (
        <div className='head'>
            <div className='logo'>
                <img src={logo} alt=""/>
            </div>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/new">New Arrival</a></li>
                    <li><a href="/sel">Hot Sells</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;