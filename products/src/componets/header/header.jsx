import React from 'react'
import './header.css'
import img from '../../assests/1.jpg'
function Header() {
  return (
    <div className='header'>
        <div className='container'>
        <h2>Dashboard</h2>
        <div className='right-nav'>
            <h3>Admin</h3>
            <img src={img} className='admin-img'></img>
        </div>
    </div>
    </div>
    
  );
}

export default Header;