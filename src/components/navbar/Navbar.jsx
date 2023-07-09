import React from 'react'
import './navbar.scss'
import '../../scss.scss'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'


const Navbar = () => {
  return (
    <div className='navbar'>
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 1, type: 'spring'}}>
            <li><NavLink to={'/signup'}>Join</NavLink></li>
            <li><a className='navlinks' href="">Services</a></li>
            <li><a className='navlinks' href="">Contact Us</a></li>
            <li><a className='navlinks' href="">Find Care</a></li>
            <li><a className='navlinks' href="">Find Job</a></li>
            <li><a className='navlinks' href="">Articles</a></li>
            <li><a className='navlinks' href="">About Us</a></li>
        </motion.ul>
    </div>
  )
}

export default Navbar