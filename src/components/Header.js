import React from 'react';
import './Header.css';
import logo from './image/logo.jpg';

export default function Header() {
  return (
    <nav className='nav-bar'> 
      <span><img src={logo} alt="logo" className='logo' required /></span>
      <navbar className="nav">
      <ul>
      <li><a href='./vddv'>Home</a></li>
      <li><a href='./vddv'>About</a></li>
      <li><a href='./vddv'>Menu</a></li>
      <li><a href='./vddv'>Reservations</a></li>
      <li><a href='./vddv'>Order Online</a></li>
      <li><a href='./vddv'>Login</a></li>
      </ul>
      </navbar>
    </nav>
  )
}
