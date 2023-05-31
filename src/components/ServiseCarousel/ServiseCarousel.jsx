import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react';
import juba from '../../assets/images/A1 1.png'
import alzar from '../../assets/images/A9 1.png'
import ziyorat from '../../assets/images/A6 1.png'
import renova from '../../assets/images/logo.png'
import { Pagination } from 'swiper';
import service from '../../assets/images/astro logo (1).png'
import './servise.scss'
const ServiseCarousel = () => {
    return (
        <div className='service_slide'>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={3}
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
                    <div className="card_item">
                        <div className='card_box'>
                                <div className='card-wrapper'>
                                    <div className='card'>
                                        <div className='main-title'>
                                            <img src={juba} alt='satrolab tizimi' />
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card_item">
                        <div className='card_box'>
                                <div className='card-wrapper'>
                                    <div className='card'>
                                        <div className='main-title'>
                                            <img src={ziyorat} alt='satrolab tizimi' />
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card_item">
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card_item">
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card_item">
                        <div className='card_box '>
                            <div className=''>
                                <div className='card-wrapper'>
                                    <div className='card'>
                                        <div className='main-title'>
                                            <img src={alzar} alt='satrolab tizimi' />
                                        </div>
                                        <h3>Zargarlik</h3>
                                        <p>
                                            Nazorat tizimi xodimlarning ishga kelish davomati va foydali
                                            ish koeffitsiyentini hisoblashda juda samarali vosita!
                                        </p>
                                        <div className='buttons-wrapper'>
                                            <a href='https://alzargar.uz/' className='btn yellow '>Visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ServiseCarousel