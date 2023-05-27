import React from 'react'
import './Service.scss'
import service from '../../assets/images/astrolab tizim 1.png'
import logo from '../../assets/images/logo-full.svg'
import ServiseCarousel from '../ServiseCarousel/ServiseCarousel';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
function Service() {
    return (

  
      
         <div className='service'>
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>
            <div className="container">
                <div className="title">
                <ParallaxProvider>
                    <Parallax speed={2}>      
                            <h2 className='animate__animated animate__zoomIn animate__delay-3s'>Service</h2>
                    </Parallax> 
                </ParallaxProvider>
                </div>
            <ServiseCarousel /> 
            </div>

        </div>
       
    
    )
}

export default Service