import React from 'react'
import Backnext from '../../components/backnext/Backnext'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Numbers from '../../components/numbers/Numbers'
import './register.scss'

const Regtwof = () => {
  return (
    <div>
        <Navbar/>
        <section className="register">
            <Numbers two='it' />
            <div className="title">
                <h2>Tell us about yourself</h2>
            </div>
            <Backnext back='/register/stepone' next='/register/steptwosecond'/>
        </section>
        <Footer/>
    </div>
  )
}

export default Regtwof