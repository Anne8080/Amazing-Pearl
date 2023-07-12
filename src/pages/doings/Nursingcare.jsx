import React from 'react'
import './doings.scss'
import Navbar from '../../components/navbar/Navbar'
import Doingshead from '../../components/doingshead/Doingshead'
import Footer from '../../components/footer/Footer'
import nursing from '../../img/nursing.png'
import careone from '../../img/careone.png'
import caretwo from '../../img/caretwo.png'
import carethree from '../../img/carethree.png'

const img = [
    {image: careone},
    {image: caretwo},
    {image: carethree},
]

const Nursingcare = () => {
  return (
    <div>
        <Navbar/>
        <Doingshead img={nursing} care='Nursing Services' 
        words='Traveling to doctor appointments for things like infusions and injections can be difficult, particularly during advanced age or illness. Our nurses assist with medication administration at home, while keeping medication worries off your family’s plate. <br/><br/><br/>
        There are great benefits to receiving dedicated, one-on-one medical attention at home, a place of comfort and familiarity. We work with your loved one to develop highly customized care plans so they can live their day as they see fit. Let us assist with your family’s complex medical needs. <br/><br/><br/>
        Amazing pearl registered nurses provide medical assessments and vital signs monitoring with direct reporting to health care providers to ensure effective care management and continuity of care. Whether it’s hospice support, assistance with enteral feeding, or oxygen therapy'/>
        <div className="care">
          <div 
            style={{
                display: 'flex',
                justifyContent : 'space-between',
                height: '30vh',
                margin: '2% 0'
            }}
          >
              { img.map((img, i)=>(
                  <img src={img.image} alt="" />
              ))}
              
          </div>
          <p>We provide many services such as:</p>
          <div className="list">
            <div className="listdiv">
              <h2>Medication Management</h2>
              <ul>
                <li>Medications usage</li>
                <li>IV Therapy</li>
                <li>Diabetes management</li>
                <li>Medication reminders</li>
              </ul>
            </div>
            <div className="listdiv">
              <h2>Care management</h2>
              <ul>
                <li>Hopsice support</li>
                <li>Oxygen therapy</li>
                <li>Vitals monitoring</li>
                <li>Wound care</li>
              </ul>
            </div>
            <div className="listdiv">
              <h2>Nursing services</h2>
              <ul>
                <li>Catheter care</li>
                <li>Tracheostomy care</li>
                <li>Food preparation</li>
                <li>Head to toe assesement</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Nursingcare