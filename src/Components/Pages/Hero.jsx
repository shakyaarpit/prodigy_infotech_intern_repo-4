import React from 'react'
import './Style.css';
import { NavLink } from 'react-router-dom';

const Hero = (props) => {
  return (
    <div className='heroSection'>
      <div className="leftHeroSection">
       <h1>{props.title}</h1>
       <p>We Help You find Parfect Tutor for 1-On-1 Lessons <br /> It Is Completely Free And Private</p>
       
       <NavLink to={props.visit} className="btn">{props.btnName}</NavLink>
      </div>
      <div className="rightHeroSection">
        <img className='animated' src={props.img} alt="" />
      </div>
    </div>
  )
}

export default Hero
