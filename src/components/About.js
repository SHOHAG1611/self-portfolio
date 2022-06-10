import React from 'react';
import myself from '../186494965_307888137409658_5907055509596443672_n.jpg'

const About = () => {
    return (
        <div class="hero mt-8">
            <div class="hero-content flex-col lg:flex-row">
                <figure class="px-10 pt-10">
                    <img src={myself} alt="Shoes" class="rounded-xl" />
                </figure>
                <div className='px-5'>
                    <h1 class="text-5xl font-bold">About ME!</h1>
                    <p class="py-6">Hi my name is Md. Shohag. I am a Junior Web Developer. I love to use my creativity and make something new. I am well-versed in HTML ,CSS ,JavaScript ,React js, Node js and also I have a good knowledge of databases and firebase for authentication . I have 1 years of experience in web devolopment also i join Complete Web Development Course with Jhankar Mahbub (Programming Hero) for my further increase programming knowledge. I made many web applications, and still, I'm learning more.!</p>
                </div>
            </div>
        </div>
    );
};

export default About;