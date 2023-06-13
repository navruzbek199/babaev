import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import juba from '../../assets/images/A1 1.png'
import alzar from '../../assets/images/A9 1.png'
import ziyorat from '../../assets/images/logo juba.png'
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
                                    <div className='main-title service_img'>
                                        <img src={juba} alt='satrolab tizimi' />
                                    </div>
                                    <h3>Туризм</h3>
                                    <p>
                                        Предлагаем уникальные туристические пакеты и программы для незабываемых путешествий с высоким уровнем комфорта и безопасности. Откройте новые горизонты вместе с нами!
                                    </p>
                                    <div className='buttons-wrapper'>
                                        <a href='https://ziyorattour.uz/' target='_blank' className='btn yellow '>Входить</a>
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
                                    <div className='main-title service_img'>
                                        <img src={ziyorat} alt='satrolab tizimi' />
                                    </div>
                                    <h3>Маркетинг</h3>
                                    <p>
                                     Cоздаем эффективные стратегии в социальных медиа для увеличения вашей онлайн-видимости и привлечения новых клиентов, чтобы ваш бренд достигал успеха и признания.
                                    </p>
                                    <div className='buttons-wrapper'>
                                        <a href='https://juba.uz/' target='_blank' className='btn yellow '>Входить</a>
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
                                        <div className='main-title service_img'>
                                            <img src={service} alt='satrolab tizimi' />
                                        </div>
                                        <h3>IT</h3>
                                        <p>
                                            Cоздаем инновационное программное обеспечение, веб- и мобильные приложения, а также предлагаем услуги по автоматизации бизнес-процессов для вашего успеха в цифровой эпохе.
                                        </p>
                                        <div className='buttons-wrapper'>
                                            <a href='https://tizim.astrolab.uz/' target='_blank' className='btn yellow '>Входить</a>
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
                                        <div className='main-title service_img'>
                                            <img src={renova} alt='satrolab tizimi' />
                                        </div>
                                        <h3>Строительство</h3>
                                        <p>
                                             Cтроительствo государственных объектов, гарантируем надежные сооружения в соответствии с высокими стандартами качества и сроками, работаем с государственными заказчиками.
                                        </p>
                                        <div className='buttons-wrapper'>
                                            <a href='https://renova.uz/' target='_blank' className='btn yellow '>Входить</a>
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