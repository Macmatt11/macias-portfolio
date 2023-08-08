import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';


export default function Contact(){
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s3red29', 'template_ii4vlpm', form.current, 'DWC9bgB4Lxi67i05r')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        };

    return(
        <div className='contactContainer'>
            <h1 className='contact'>Contact Me</h1>
            <form ref={form}
            onSubmit={sendEmail}
            className='contactForm flex flex-col items-center
            gap-5'>
                <input className='fullname'
                type='text'
                name='user_name'
                placeholder='Full Name'
                required
                />
                <input className='email'
                type='email'
                name='user_email'
                placeholder='Email'
                required
                />
                <input className='subject'
                type='text'
                name='subject'
                placeholder='Subject'
                required
                />
                <textarea className='message'
                name='message'
                placeholder='Send Message'
                />
                <button className='sendMsg hover:ease-in duration-150' type='submit'>
                    Send Message
                </button>
            </form>
        </div>
        
    )
}