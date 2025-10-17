import React from 'react'
import './Hero.css'
import hand_icon from "../../assets/hand_icon.png"
import right_arrow from "../../assets/right_arrow.png"
import men from '../../assets/p8.webp'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">

       
        <h2>Best Deals !   Best Price !</h2>
        <div className="hero-hand-icon">
        <p>new</p>
        <img src={hand_icon} alt='' height='60px' />
        </div>
        <p>Collections</p>
        <p>for EveryOne</p>
        <div className="hero-latest-btn">
            <p>latest Collection</p>
            <img src={right_arrow} alt='' height='30px' />
         </div>
         </div>
         
        <div className="hero-right">
            <img src={men} alt='' height='650px'/>
            
        </div>
      
    </div>
  )
}

export default Hero

