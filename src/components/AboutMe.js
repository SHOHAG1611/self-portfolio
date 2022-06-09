import React from 'react';

const AboutMe = () => {
    return (
        <div class="hero mt-8">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://img.freepik.com/free-photo/portrait-bearded-urban-male-isolated-with-contrast-illumination-grey-vignette-background_613910-1277.jpg?size=626&ext=jpg&uid=R69069354&ga=GA1.2.640787916.1653239042" class="max-w-sm rounded-lg shadow-2xl" alt=''/>
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