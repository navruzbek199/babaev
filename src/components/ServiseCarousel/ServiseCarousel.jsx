import React, { Component } from 'react';
import Slider from 'react-slick';
import   './servise.scss';
import service from '../../assets/images/astrolab tizim 1.png';
import juba from '../../assets/images/A1 1.png'
import alzar from '../../assets/images/A9 1.png'
import ziyorat from '../../assets/images/A6 1.png'
import renova from '../../assets/images/logo.png'
export default class ServiseCarousel extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
      arrows:false,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			speed: 3000,
			autoplaySpeed: 2000,
			cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
            breakpoint: 508,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
    
      ]
		};
		return (
			<div>
				<Slider {...settings}>
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
             
				</Slider>
			</div>
		);
	}
}
