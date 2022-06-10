import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './ContactMe.css'

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_py6fpnt', 'template_ifzqn5l', form.current, 'o-jNEpYVLrpu92yIt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            alert("thanks for contact me!")
    };

    return (
        <div className='container mx-auto text-center mb-3' style={{height:'250px',width:'280px'}}>
            <h1 className='text-3xl'>Contact Me</h1>
            <form className='contact-me' ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <br />
                <input className='' type="text" name="user_name" placeholder='Enter your name' />
                <br />
                <label>Email</label>
                <br />
                <input className='bg-dark' type="email" name="user_email" placeholder='Enter Your Email' />
                <br />
                <label>Message</label>
                <br />
                <textarea name="message" placeholder='Enter Your Massage' />
                <br />
                <input className='btn btn-primary' type="submit" value="Send" />
            </form>
        </div>
    );
};
export default ContactUs;