import React from 'react'
import './Service.scss'
import service from '../../assets/images/astro logo (1).png'
import logo from '../../assets/images/logo-full.svg'
import ServiseCarousel from '../ServiseCarousel/ServiseCarousel';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import juba from '../../assets/images/A1 1.png'
import alzar from '../../assets/images/A9 1.png'
import ziyorat from '../../assets/images/A6 1.png'
import renova from '../../assets/images/logo.png'
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
                            <h2 className='animate__animated animate__zoomIn animate__delay-1s'>Service</h2>
                        </Parallax>
                    </ParallaxProvider>
                </div>
<div className="media_carousel">

                <ServiseCarousel/>
</div>
                <div className="row desc ">
                    <div className="col-xl-3 col-lg-3">
                    <div className='card_box'>
                        <div className=''>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='main-title'>
                                        <img src={ziyorat} alt='satrolab tizimi' />
                                    </div>
                                    <h3>Turizm</h3>
                                    <p>
                                        Nazorat tizimi xodimlarning ishga kelish davomati va foydali
                                        ish koeffitsiyentini hisoblashda juda samarali vosita!
                                    </p>
                                    <div className='buttons-wrapper'>
                                        <a href='https://ziyorattour.uz/' className='btn yellow '>Visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                    <div className='card_box'>
                        <div className=''>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='main-title'>
                                        <img src={juba} alt='satrolab tizimi' />
                                    </div>
                                    <h3>Marketing</h3>
                                    <p>
                                        Nazorat tizimi xodimlarning ishga kelish davomati va foydali
                                        ish koeffitsiyentini hisoblashda juda samarali vosita!
                                    </p>
                                    <div className='buttons-wrapper'>
                                        <a href='https://juba.uz/' className='btn yellow '>Visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                    <div className='card_box '>
                        <div className=''>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='main-title'>
                                        <img src={service} alt='satrolab tizimi' />
                                    </div>
                                    <h3>IT</h3>
                                    <p>
                                        Nazorat tizimi xodimlarning ishga kelish davomati va foydali
                                        ish koeffitsiyentini hisoblashda juda samarali vosita!
                                    </p>
                                    <div className='buttons-wrapper'>
                                        <a href='https://tizim.astrolab.uz/' className='btn yellow '>Visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                    <div className='card_box '>
                        <div className=''>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='main-title'>
                                        <img src={renova} alt='satrolab tizimi' />
                                    </div>
                                    <h3>Qurilish</h3>
                                    <p>
                                        Nazorat tizimi xodimlarning ishga kelish davomati va foydali
                                        ish koeffitsiyentini hisoblashda juda samarali vosita!
                                    </p>
                                    <div className='buttons-wrapper'>
                                        <a href='https://renova.uz/' className='btn yellow '>Visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Service