import React, { useEffect } from 'react';
import './HomePage.scss'
import men from '../../assets/images/2J6A2529 копия.png'
import logo from '../../assets/images/logo-full.svg'
import gsap from "gsap";
import Mouse from '../../assets/images/mouse.svg'
function HomePage() {

    useEffect(() => {
        // var colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];
        var wrap = gsap.utils.wrap(100, 1000);
        gsap.set(".box", {
            y: (i) => i * 100
        });
        gsap.to(".box", {
            duration: 5,
            ease: "none",
            y: "-=500", //move each box 500px to right
            modifiers: {
                y: gsap.utils.unitize(wrap) //force y value to wrap when it reaches -100
            },
            repeat: -1
        });
        //toggle overflow
        const overflow = document.querySelector("#overflow");
        overflow?.addEventListener("change", applyOverflow);
        function applyOverflow() {
            if (overflow.checked) {
                gsap.set(".wrapperx", { overflow: "visible" });
            } else {
                gsap.set(".wrapperx", { overflow: "hidden" });
            }
        }
    })
    return (
        <div className="home" id="overflow">
            <div className="logo animate__animated animate__slideInDown">
                    <img src={logo} alt='logo' />
            </div>
            <div className="wrapperx">
                <div className="boxes">
                    <div className="box">Jurabek Babaev</div>
                    <div className="box">Jurabek Babaev</div>
                    <div className="box">Jurabek Babaev</div>
                    <div className="box">Jurabek Babaev</div>
                    <div className="box">Jurabek Babaev</div>
                    <div className="box">Jurabek Babaev</div>
                    <div className="box">Jurabek Babaev</div>
                    <div className="box">Jurabek Babaev</div>
                    <div className="box">Jurabek Babaev</div>
                    <div className="box">Jurabek Babaev</div>
                </div>
            </div>
            <div className="container">
                
                <div className="main">
                    <div className="left">
                        <p className='animate__animated animate__slideInLeft'>Portfolio</p>
                        <h1 className='animate__animated animate__slideInLeft '>Jurabek Babaev</h1>
                        {/* <div className="btn_home">
                            <a href='#bio' className='btn white'>Bio</a>
                            <a href='#project' className='btn yellow'>Projects</a>
                        </div> */}
                    </div>
                    <div className="right animate__animated animate__slideInRight">
                        <img src={men} alt="babev" />
                    </div>
                </div>
            </div>
            <div className="mouse">
                <img src={Mouse} alt="" />
            </div>
        </div>

    )
}

export default HomePage