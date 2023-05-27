import React, { Component } from 'react';
import Slider from 'react-slick';
import   './projectCarousel.scss';
import service from '../../assets/images/astrolab tizim 1.png';

import tizim from '../../assets/images/astrolab tizim cw.png'
import juba from '../../assets/images/A1 1.png'
import alzar from '../../assets/images/A9 1.png'
import ziyorat from '../../assets/images/A6 1.png'
import logo from '../../assets/images/logo-full.svg'
export default class ProjectCarousel extends Component {
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
            slidesToShow:3 ,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 995,
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
    
      ]
		};
		return (
			<div>
				<Slider {...settings}>
                    <div className="card_box">
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
                    <div className="card_box">
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
                    <div className="card_box">
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
                    <div className="card_box">
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
                    <div className="card_box">
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
                    <div className="card_box">
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
                    <div className="card_box">
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
                    <div className="card_box">
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
				</Slider>
			</div>
		);
	}
}
