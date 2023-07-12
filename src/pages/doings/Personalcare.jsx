import React from 'react'
import './doings.scss'
import Navbar from '../../components/navbar/Navbar'
import Doingshead from '../../components/doingshead/Doingshead'
import Footer from '../../components/footer/Footer'
import personal from '../../img/personal.png'
import careone from '../../img/careone.png'
import caretwo from '../../img/caretwo.png'
import carethree from '../../img/carethree.png'

const img = [
    {image: careone},
    {image: caretwo},
    {image: carethree},
]

const Personalcare = () => {
  return (
    <div>
        <Navbar/>
        <Doingshead img={personal} care='Personal Care' 
        words='People often take for granted the things they do every day, like climbing stairs, taking care of personal hygiene and even just getting out of bed in the morning. 
        But these things can become major challenges as you age. In many cases, loved ones think the only solution is to put their older family members into nursing homes. <br/><br/><br/>
        Amazing pearl caregivers can provide personal care with dignity and respect, so the home can be a place of comfort, not frustration. Contact us today to get more information on how we can help you.'/>
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
          <p>From mobility assistance to hygiene and feeding, Amazing pearl caregivers can help you with personal care just the way you want it.</p>
          <div className="list">
            <div className="listdiv">
              <h2>Mobility Assistance</h2>
              <ul>
                <li>Walking assistance</li>
                <li>Wheelchair assistance</li>
                <li>Safety supervision</li>
              </ul>
            </div>
            <div className="listdiv">
              <h2>Personal Hygiene</h2>
              <ul>
                <li>Bathing and grooming</li>
                <li>Dressing</li>
                <li>Running errands</li>
                <li>Medication reminders</li>
              </ul>
            </div>
            <div className="listdiv">
              <h2>Feeding</h2>
              <ul>
                <li>Spoon feeding</li>
                <li>Tube feeding</li>
                <li>Food preparation</li>
                <li>Diet monitoring</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Personalcare