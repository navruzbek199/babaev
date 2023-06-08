import React from 'react'
import './Service.scss'
import logo from '../../assets/images/logo-full.svg'
import ServiseCarousel from '../ServiseCarousel/ServiseCarousel';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
function Service() {

    return (
        <div className='service'>
            <div className="logo">
                <a href="/">
                    <img src={logo} alt='logo' />
                </a>
            </div>
            <div className="container">
                <div className="title">
                    <ParallaxProvider>
                        <Parallax speed={2}>
                            <h2 className='animate__animated animate__zoomIn animate__delay-1s'>Услуги</h2>
                        </Parallax>
                    </ParallaxProvider>
                </div>
                <div className="media_carousel">
                    <ServiseCarousel />
                </div>
            </div>

        </div>


    )
}

export default Service