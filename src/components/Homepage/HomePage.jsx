import React, { useEffect } from 'react';
import './HomePage.scss'
import men from '../../assets/images/image 1.png'
import logo from '../../assets/images/logo-full.svg'
import gsap from "gsap";
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
            <div className="logo">
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
                        <p>Portfolio</p>
                        <h1>Jurabek Babaev</h1>
                        <button className='btn white'>Bio</button>
                        <button className='btn yellow'>Projects</button>
                    </div>
                    <div className="right">
                        <img src={men} alt="babev" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage