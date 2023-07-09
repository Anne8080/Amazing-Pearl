import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Numbers from '../../components/numbers/Numbers'
import './register.scss'

const Regonef = () => {
  return (
    <div>
        <Navbar/>
        <section className='register'>
            <Numbers one='it' />
            <div className="title">
                <h2>Tell us how we can help you</h2>
                <p>I am looking for care on behalf of :</p>
            </div>
            <Link to={'/register/steptwofirst'}><button className="button">Next</button></Link>
        </section>
        <Footer/>
    </div>
  )
}

export default Regonef