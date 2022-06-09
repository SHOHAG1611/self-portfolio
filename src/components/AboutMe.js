import React from 'react';
import myself from '../1654663724553.jpg'

const AboutMe = () => {
    return (
        <div class="hero mt-8">
            <div class="hero-content flex-col lg:flex-row">
                <img src={myself} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='px-5'>
                    <h1 class="text-5xl font-bold">Hello! <br />
                     My Name is Shohag</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;