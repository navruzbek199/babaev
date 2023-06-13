import React from 'react'
import './About.scss'
import logo from '../../assets/images/logo-full.svg'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import tick from '../../assets/images/tick.svg'
const About = () => {
    return (
        <div className='about_page'>
            <div className="container">
                <div className="logo animate__animated animate__slideInDown">
                    <a href="/">
                        <img src={logo} alt='logo' />
                    </a>
                </div>
                <div className="title">
                    <ParallaxProvider>
                        <Parallax speed={1}>
                            <h2 className='animate__animated animate__zoomIn animate__delay-1s'>Чем могу быть полезен?</h2>
                        </Parallax>
                    </ParallaxProvider>
                </div>
                <div className="lists">
                    <ul>
                        <li>
                            <img src={tick} alt="tick" />
                            Систематизация бизнес-процессов
                        </li>
                        <li>
                            <img src={tick} alt="tick" />
                            Масштабирование бизнеса.
                        </li>
                        <li>
                            <img src={tick} alt="tick" />
                            Выстраивание отдела продаж
                        </li>
                        <li>
                            <img src={tick} alt="tick" />
                            Консультирование по тур напрвлениям
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src={tick} alt="tick" />
                            Маркетинг
                        </li>
                        <li>
                            <img src={tick} alt="tick" />
                            Финансы
                        </li>
                        <li>
                            <img src={tick} alt="tick" />
                            IT решения
                        </li>
                        <li>
                            <img src={tick} alt="tick" />
                            Командообразование <br /> и HR 
                        </li>
                    </ul>
                </div>
                <div className="btn_homes">
                    <a href='https://t.me/@Albukhary' target='_blank' className='btn white'>Обсудить проект</a>
                </div>
            </div>
        </div>
    )
}

export default About