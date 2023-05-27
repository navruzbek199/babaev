import React, { useRef } from 'react'
import './project.scss'
import tizim from '../../assets/images/astrolab tizim cw.png'
import juba from '../../assets/images/A1 1.png'
import alzar from '../../assets/images/A9 1.png'
import ziyorat from '../../assets/images/A6 1.png'
import logo from '../../assets/images/logo-full.svg'
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function Project() {
    return (
        <div className='project' id='project'>
            <div className="logo">
                <img src={logo} alt='logo' />
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
                <div className="row second_cards">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={tizim} alt="satrolab tizimi" />
                                </div>
                                <h3>Astrolab tizim</h3>
                                <button className='btn yellow '>Visit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={juba} alt="satrolab tizimi" />
                                </div>
                                <h3>Astrolab tizim</h3>
                                <button className='btn yellow '>Visit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={alzar} alt="satrolab tizimi" />
                                </div>
                                <h3>Astrolab tizim</h3>
                                <button className='btn yellow '>Visit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={ziyorat} alt="satrolab tizimi" />
                                </div>
                                <h3>Astrolab tizim</h3>
                                <button className='btn yellow '>Visit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row second_cards">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={tizim} alt="satrolab tizimi" />
                                </div>
                                <h3>Astrolab tizim</h3>
                                <button className='btn yellow '>Visit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={juba} alt="satrolab tizimi" />
                                </div>
                                <h3>Astrolab tizim</h3>
                                <button className='btn yellow '>Visit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={alzar} alt="satrolab tizimi" />
                                </div>
                                <h3>Astrolab tizim</h3>
                                <button className='btn yellow '>Visit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={ziyorat} alt="satrolab tizimi" />
                                </div>
                                <h3>Astrolab tizim</h3>
                                <button className='btn yellow '>Visit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project