import React from 'react'
import './navbar.scss'
import '../../scss.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><a className='navlinks' href="">Join</a></li>
            <li><a className='navlinks' href="">Services</a></li>
            <li><a className='navlinks' href="">Contact Us</a></li>
            <li><a className='navlinks' href="">Find Care</a></li>
            <li><a className='navlinks' href="">Find Job</a></li>
            <li><a className='navlinks' href="">Articles</a></li>
            <li><a className='navlinks' href="">About Us</a></li>
        </ul>
    </div>
  )
}

export default Navbar