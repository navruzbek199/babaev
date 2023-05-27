import React from 'react'
import './Service.scss'
import service from '../../assets/images/astrolab tizim 1.png'
import logo from '../../assets/images/logo-full.svg'
import ServiseCarousel from '../ServiseCarousel/ServiseCarousel';

function Service() {
    return (

  
      
         <div className='service'>
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>
            <div className="container">
                <div className="title">
                    <h2>Service</h2>
                </div>
            <ServiseCarousel /> 
            </div>

        </div>
       
    
    )
}

export default Service