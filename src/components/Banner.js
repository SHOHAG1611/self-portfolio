import React from 'react';

const Banner = () => {
    const handleClick = () => {
        window.open("https://drive.google.com/file/d/18LC-AfE_5irlVeg02ZvMOVwLZ0yGtNCv/view?usp=sharing");
    };
    return (
        <div style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1JCRAkYvjv8sdoTH7YCy_Rsmyrgk76jNAA&usqp=CAU")`, height: '450px' }} class="hero">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-4xl font-bold">Welcome to Shohag Portfolio</h1>
                    <p class="py-6">I am a Junior Web Developer. I love to use my creativity and make something new.</p>
                    <button onClick={handleClick} class="btn btn-primary">My Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
