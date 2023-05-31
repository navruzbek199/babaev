import React, { useRef } from 'react'
import './project.scss'
import tizim from '../../assets/images/astrolab tizim cw.png'
import juba from '../../assets/images/A1 1.png'
import alzar from '../../assets/images/A9 1.png'
import ziyorat from '../../assets/images/A6 1.png'
import logo from '../../assets/images/logo-full.svg'
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Alzargar from '../../assets/images/A10.png'
import renova from '../../assets/images/logo.png'
import Gektr from '../../assets/images/Gektr.png'
function Project() {
    return (
        <div className='project' id='project'>
            <div className="logo">
                <a href="/">
                    <img src={logo} alt='logo' />
                </a>
            </div>
            <div className="container">
            <div className="title">
                <ParallaxProvider>
                        <Parallax speed={2}>      
                            <h2 className='animate__animated animate__zoomIn animate__delay-4s'>Project</h2>
                        </Parallax> 
                </ParallaxProvider>
            </div>
                   
                <div className="media_Project">
                    <ProjectCarousel />
                </div>
                <div className="second_cards">
                    <div className="item-card">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={tizim} alt="satrolab tizimi" />
                                </div>
                                <h3>Astrolab tizim</h3>
                                <a href='https://tizim.astrolab.uz/' className='btn yellow '>Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-card">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={juba} alt="satrolab tizimi" />
                                </div>
                                <h3>Juba Marketing</h3>
                                <a href='https://juba.uz/' className='btn yellow '>Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-card">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={alzar} alt="satrolab tizimi" />
                                </div>
                                <h3>Alzar</h3>
                                <a href='https://alzar.uz/' className='btn yellow '>Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-card">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={ziyorat} alt="satrolab tizimi" />
                                </div>
                                <h3>Ziyorat Turizm</h3>
                                <a href='http://ziyorat.uz/' className='btn yellow '>Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-card">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={Alzargar} alt="satrolab tizimi" />
                                </div>
                                <h3>Alzargar Market</h3>
                                <a href='http://alzargar.uz/' className='btn yellow '>Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-card">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={renova} alt="satrolab tizimi" />
                                </div>
                                <h3>Renovation</h3>
                                <a href='http://renova.uz/' className='btn yellow '>Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-card">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={Gektr} alt="satrolab tizimi" />
                                </div>
                                <h3>Gekt Accounting</h3>
                                <a href='http://gekt.uz/' className='btn yellow '>Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-card">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={ziyorat} alt="satrolab tizimi" />
                                </div>
                                <h3>Astrolab tizim</h3>
                                <a href='http://ziyorat.uz/' className='btn yellow '>Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project