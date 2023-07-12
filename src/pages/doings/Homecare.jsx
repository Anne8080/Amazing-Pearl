import React from 'react'
import './doings.scss'
import Navbar from '../../components/navbar/Navbar'
import Doingshead from '../../components/doingshead/Doingshead'
import Footer from '../../components/footer/Footer'
import homecare from '../../img/homecare.png'
import homeone from '../../img/homeone.png'
import hometwo from '../../img/hometwo.png'


const Homecare = () => {
  const img = [
      {image: homeone},
      {image: hometwo},
  ]
  return (
    <div>
        <Navbar/>
        <Doingshead img={homecare} care='Home support' 
        words='We are looking for people who are as driven as we are to improve the quality of life for those we serve. It’s an incredibly rewarding mission that our team is dedicated to achieving. 
        Owners, support staff, caregivers and more all play key roles in empowering seniors and adults with disabilities with the support they need to remain in their homes. 
        It’s not just a bonus—in our eyes, it’s the basis of everything we do. If you’d like to help us live out our mission, join our team! <br/><br/><br/>
        By 2050, 1.6 billion people in the world will be over age 65. That is over a billion reasons to care. Guided by our core values, we intend to help these seniors remain in their homes.'
        />
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
          <p>Amazing pearl caregivers can help you keep your home just the way you’ve learned to love it. <br /> This  includes:</p>
          <div className="list">
            <div className="listdiv">
              <h2>Light House Keeping</h2>
              <ul>
                <li>Taking out the garbage</li>
                <li>Cleaning and laundry</li>
                <li>Home organizations</li>
              </ul>
            </div>
            <div className="listdiv">
              <h2>Socializations</h2>
              <ul>
                <li>Playing games</li>
                <li>Reading a book out aloud</li>
                <li>Accompanying on walks and outings</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Homecare