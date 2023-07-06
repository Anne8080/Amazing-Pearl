import React from 'react'
import './footer.scss'
import vector from '../../img/vector.png'
import logo from '../../img/logo.png'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="feet"><img src={logo} alt="" /></div>
            <div className="feet">
                <h2>Important Links</h2>
                <ul>
                    <li><a href="">WHO WE SERVE</a></li>
                    <li><a href="">PRODUCTS</a></li>
                    <li><a href="">WHAT WE DO</a></li>
                </ul>
            </div>
            <div className="feet">
                <h2>Important Links</h2>
                <ul>
                    <li><a href="">GET A QUOTE</a></li>
                    <li><a href="">CONTACT US</a></li>
                    <li><a href="">ISO CERTIFICATION</a></li>
                </ul>
            </div>
            <div className="feet">
                <h2>Get In Touch</h2>
                <ul>
                    <li><CallIcon className='icons'/> Toll Free: +12409357172</li>
                    <li><CallIcon className='icons'/> 12409357172</li>
                    <li><EmailIcon className='icons'/> info@Amazingpearlhomehealth.com</li>
                    <li><LanguageIcon className='icons'/> Amazingpearlhomehealth.com</li>
                </ul>
            </div>
        </div>
        <div className="bottom">
            <img src={vector} alt="" /><br /><br />
            <p>Net Trix Solutions (c) All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer