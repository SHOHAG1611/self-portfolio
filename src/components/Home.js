import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import MyProjects from './MyProjects';
import Reviews from './Reviews';
import Skills from './Skills';
import ContactUs from './ContactUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
            <Skills></Skills>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;