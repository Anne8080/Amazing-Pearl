import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

import './sign.scss'

const Sign = () => {
  return (
    <div id='signpg'>
        <Navbar/>
        <section className='signpg'>
            <h1>Join to find <span>Care.</span> </h1>
            <div className="signup">
                <form action="">
                    <div className="details">
                        <label htmlFor="">Name:</label><br />
                        <input type="text" />
                    </div>
                    <div className="details">
                        <label htmlFor="">Email:</label><br />
                        <input type="email" />
                    </div>
                    <div className="details">
                        <label htmlFor="">Password:</label><br />
                        <input type="password" />
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
        </section>
    </div>
  )
}

export default Sign