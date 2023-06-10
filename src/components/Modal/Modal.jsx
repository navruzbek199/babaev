
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './Modal.scss'
export const Modal = () => {
    const [modal, setModal] = useState(false);

    // clearInterval()
    useEffect(() => {
        let intervalId =  setTimeout(() => {
            setModal(true)
        }, 10000);
        
         setTimeout(() => {
            // clearTimeout(intervalId )
            setModal(false)

        }, 20000);
           
    },[])
    const overleyRef = useRef();
    const handleOvarley = (evt) => {
        console.log("modal" ,modal);
        console.log(evt.target);
        if (evt.target === overleyRef.current) {
            setModal(false);
        }
    };
  return (
    <div   ref={overleyRef}
    onClick={(evt) => handleOvarley(evt)}
    className={`overlay ${modal ? "open" : "close"}`}>
        <div className='wrapper'>
            <button  onClick={() => setModal(false)}
                className=" modal-button" > &times; </button>
          
            <div className='modal_body'>
            <div className="modal_left">

            <h3>Только сейчас получите уникальную скидку в размере 20% на заказ
любой из наших услуг!
</h3> 
<p>Мы гарантируем высокое качество работы, индивидуальный подход к каждому клиенту и полное удовлетворение 
ваших потребностей.
</p>
<p>
Напишите нам и мы с вами свяжемся, выслушаем ваши вопросы/задачи и предложим свои варианты решения.</p>
<button>Обсудить проект</button>
            </div>
            <div className="modal_right">
<div></div>
            </div>
            </div>
        </div>
    </div>
  )
}
