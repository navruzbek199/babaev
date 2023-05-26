import React from 'react'
import './Service.scss'
import service from '../../assets/images/astrolab tizim 1.png'
import logo from '../../assets/images/logo-full.svg'
function Service() {
    return (
        <div className='service'>
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>
            <div className="container">
                <div className="title">
                    <h2>Service</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={service} alt="satrolab tizimi" />
                                </div>
                                <h3>IT loyihalar</h3>
                                <p>Nazorat tizimi xodimlarning
                                    ishga kelish davomati va foydali ish koeffitsiyentini hisoblashda juda samarali vosita!</p>
                                <div className="buttons-wrapper">
                                    <button className='btn'>Info</button>
                                    <button className='btn yellow '>Visit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={service} alt="satrolab tizimi" />
                                </div>
                                <h3>IT loyihalar</h3>
                                <p>Nazorat tizimi xodimlarning
                                    ishga kelish davomati va foydali ish koeffitsiyentini hisoblashda juda samarali vosita!</p>
                                <div className="buttons-wrapper">
                                    <button className='btn'>Info</button>
                                    <button className='btn yellow '>Visit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="main-title">
                                    <img src={service} alt="satrolab tizimi" />
                                </div>
                                <h3>IT loyihalar</h3>
                                <p>Nazorat tizimi xodimlarning
                                    ishga kelish davomati va foydali ish koeffitsiyentini hisoblashda juda samarali vosita!</p>
                                <div className="buttons-wrapper">
                                    <button className='btn'>Info</button>
                                    <button className='btn yellow '>Visit</button>
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