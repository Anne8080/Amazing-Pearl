import React, {useState} from 'react'
import './navbar.scss'
import '../../scss.scss'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'


const Navbar = () => {
  const [color, setColor] = useState(false)
	const changeColor = () => {
		if (window.scrollY >= 500) {
			setColor(true)
		} else {
			setColor(false)
		}
	}
	window.addEventListener ('scroll', changeColor)
  return (
    <div className={color ? 'navbar navbarbg' : 'navbar'}>
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 1, type: 'spring'}}>
            <li><NavLink to={'/signup'} className='navlinks'>Join</NavLink></li>
            {/* will change the rest of the links to NavLink when pages are available */}
            <li><a className='navlinks' href="">Services</a></li>
            <li><a className='navlinks' href="">Contact Us</a></li>
            <li><a className='navlinks' href="">Find Care</a></li>
            <li><NavLink to={'/jobs'} className='navlinks' href="">Find Job</NavLink></li>
            <li><a className='navlinks' href="">Articles</a></li>
            <li><a className='navlinks' href="">About Us</a></li>
        </motion.ul>
    </div>
  )
}

export default Navbar