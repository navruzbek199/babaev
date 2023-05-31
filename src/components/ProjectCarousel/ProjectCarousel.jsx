import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import tizim from '../../assets/images/astrolab tizim cw.png'
import juba from '../../assets/images/A1 1.png'
import alzar from '../../assets/images/A9 1.png'
import ziyorat from '../../assets/images/A6 1.png'
import Alzargar from '../../assets/images/A10.png'
import renova from '../../assets/images/logo.png'
import Gektr from '../../assets/images/Gektr.png'
import { Pagination } from 'swiper';
import './projectCarousel.scss'
const ProjectCarousel = () => {
    return (
        <div className='project_slide'>
            <Swiper
                modules={[ Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    "@1.50": {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
            >
                <SwiperSlide>
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
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="item-card">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={juba} alt="satrolab tizimi" />
                                </div>
                                <h3>Juba Marketing</h3>
                                <a href='http://juba.uz/' className='btn yellow '>Visit</a>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide> <div className="item-card">
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="main-title">
                                <img src={alzar} alt="satrolab tizimi" />
                            </div>
                            <h3>Alzar</h3>
                            <a href='http://alzar.uz/' className='btn yellow '>Visit</a>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="item-card">
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="main-title">
                                <img src={ziyorat} alt="satrolab tizimi" />
                            </div>
                            <h3>Ziyorat Turizm</h3>
                            <a href='http://ziyorat.uz/' className='btn yellow '>Visit</a>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="item-card">
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="main-title">
                                <img src={Alzargar} alt="satrolab tizimi" />
                            </div>
                            <h3>Alzargar Market</h3>
                            <a href='http://alzargar.uz/' className='btn yellow '>Visit</a>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className="item-card">
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="main-title">
                                <img src={renova} alt="satrolab tizimi" />
                            </div>
                            <h3>Renovation</h3>
                            <a href='http://renova.uz/' className='btn yellow '>Visit</a>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="item-card">
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="main-title">
                                <img src={Gektr} alt="satrolab tizimi" />
                            </div>
                            <h3>Gekt Accounting</h3>
                            <a href='http://gekt.uz/' className='btn yellow '>Visit</a>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className="item-card">
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="main-title">
                                <img src={ziyorat} alt="satrolab tizimi" />
                            </div>
                            <h3>Ziyorat Tour</h3>
                            <a href='http://ziyorat.uz/' className='btn yellow '>Visit</a>
                        </div>
                    </div>
                </div></SwiperSlide>








            </Swiper>
        </div>
    )
}

export default ProjectCarousel