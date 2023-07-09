import React from 'react'
import Backnext from '../../components/backnext/Backnext'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Numbers from '../../components/numbers/Numbers'
import './register.scss'

const Regtwos = () => {
  return (
    <div>
        <Navbar/>
        <section className="register">
            <Numbers two='it' />
            <div className="title">
                <h2>Tell us about the person receiving care</h2>
            </div>
            <Backnext back='/register/steptwofirst' next='/register/stepthree'/>
        </section>
        <Footer/>
    </div>
  )
}

export default Regtwos