import React from 'react';
import myself from '../1654663724553.jpg'

const AboutMe = () => {
    const handleClick = () => {
        window.open("https://www.facebook.com/profile.php?id=100045654231815");
      };
    return (
        <div class="hero mt-8">
            <div class="hero-content flex-col lg:flex-row">
                <figure class="px-10 pt-10">
                    <img src={myself} alt="Shoes" class="rounded-xl" />
                </figure>
                <div className='px-5'>
                    <h1 class="text-5xl font-bold">Hello! <br />
                        My Name is Shohag</h1>
                    <p class="py-6">I am a Junior Web Developer. I love to use my creativity and make something new.I am well-versed in HTML ,CSS ,JavaScript ,React js, Node js and also I have a good knowledge of databases and firebase for authentication .</p>
                    <button onClick={handleClick} class="btn btn-primary">FaceBook</button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;