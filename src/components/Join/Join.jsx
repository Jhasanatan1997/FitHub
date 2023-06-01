import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';




const Join = () => {
  
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1m48k98', 'template_isrgeni', form.current, 'nOnGujKIxv0SYGeN6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
  return (
    <>
    <div className='join'>
        <div className="left-j">
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>{" "}
                <span>LEVEL-UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>{" "}
                <span className='stroke-text'>WITH-US?</span>
            </div>
        </div>


        <div className="right-j">
            <form ref={form} action="" className="e-mail" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your E-mail address' />
                <button className='join-button'>Join Now</button>
            </form>
        </div>
      
    </div>

    <hr className='hr2'/>

    </>
  )
}

export default Join
