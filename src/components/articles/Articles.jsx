import React from 'react'
import './articles.scss'

const Articles = ({img, title, words, link}) => {
  return (
    <div className='lart'>
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{words}</p>
        <a href={link}>Read More</a>
    </div>
  )
}

export default Articles