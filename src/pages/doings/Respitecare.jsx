import React from 'react'
import './doings.scss'
import Navbar from '../../components/navbar/Navbar'
import Doingshead from '../../components/doingshead/Doingshead'
import Footer from '../../components/footer/Footer'
import respite from '../../img/respite.png'
import careone from '../../img/careone.png'
import caretwo from '../../img/caretwo.png'
import carethree from '../../img/carethree.png'

const img = [
    {image: careone},
    {image: caretwo},
    {image: carethree},
]

const Respitecare = () => {
  return (
    <div>
        <Navbar/>
        <Doingshead img={respite} care='Respite Care' 
        words='When a loved one needs care, it’s natural for you to want to take on all of the responsibility. But, caring for your parent, sibling, spouse or other loved one is no small feat. <br/><br/><br/>
        Trying to manage their care while juggling the other responsibilities in your life can wear on you both physically and mentally. You know this, and so do we. <br/><br/><br/>
        That is why we offer respite care for you and your family.'/>
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
          <div className="what">
            <h2>What is Respite Care?</h2>
            <p>With respite care, Right at Home’s professionally trained and bonded/insured caregivers can step in and temporarily take over the care of your loved one, allowing you to grab coffee with a friend, catch a movie with your children, or take a much-needed nap. While away, you can rest assured that your loved one is being cared for with dignity and respect.</p>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Respitecare