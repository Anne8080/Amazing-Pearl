import React from 'react'
import './doings.scss'

const Doings = ({title, explain, link}) => {
    
  return (
    <div>
      {/* what we do links */}
        <div className='doings'>
            <div>
            <h4>{title}</h4>
            <p className='doingex'>{explain}</p><br />
            <p><b><a href={link}>Learn More</a></b></p>
            </div>
        </div>
    </div>
  )
}

export default Doings