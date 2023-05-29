import React from 'react'
import './contacts.scss'
import phone from '../../assets/images/carbon_phone.svg'
import location from '../../assets/images/octicon_location-16.svg'
import time from '../../assets/images/Group (1).svg'
import email from '../../assets/images/Group.svg'
import logo from '../../assets/images/logo-full.svg'
import InputMask from 'react-input-mask'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
function Contacts() {
    return (
        <div className='contacts'>
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>
            <div className="container">
                <div className="title">
                <ParallaxProvider>
                    <Parallax speed={5}>      
                        <h2 className='animate__animated animate__zoomIn animate__delay-3s'>Contacts</h2>
                    </Parallax> 
                </ParallaxProvider>
                </div>
                <div className="contact_menu">
                    <ul className="contact_menu_item">
                        <li>
                            <img src={phone} alt="" />
                            <div className='text'>
                                <h4>PHONE</h4>
                                <span>
                                    +998 998466668 <br />
                                    +998 990786192
                                </span>
                            </div>
                        </li>
                        <li>
                            <img src={location} alt="" />
                            <div className='text'>
                                <h4>LOCATION</h4>
                                <span>
                                    49, Islam Karimov street, <br />
                                    Tashkent, Uzbekistan
                                </span>
                            </div>
                        </li>
                        <li>
                            <img src={time} alt="" />
                            <div className='text'>
                                <h4>WORK HOURS</h4>
                                <span>
                                    Monday-Saturday <br />
                                    09:00-18:00
                                </span>
                            </div>
                        </li>
                        <li>
                            <img src={email} alt="" />
                            <div className='text'>
                                <h4>EMAIL</h4>
                                <span>
                                    info@astrolab.uz
                                </span>
                            </div>
                        </li>
                    </ul>
                    <form action="">
                        <div className="form_control">
                            <InputMask
                                type="text"
                                name='number'
                                placeholder="Номер телефона*"
                                // onChange={(e) => setChangephone(e.target.value)}
                                required
                                mask="+\9\9\8\(99) 999-99-99"
                                maskChar=" "
                                autoComplete="off"
                                // value={changephone}
                            />
                        </div>
                        <div className="form_btn">
                            <button type='submit' id='btn'>
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts