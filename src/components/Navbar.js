import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <section class="">
            <nav class="navbar navbar-expand-lg navbar-style">
                <div class="container">
                    <Link to='/home'>Home</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                          <Link to='/about'>About</Link>
                          <Link to='/blog'>Blog</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </section>
    );
};

export default Navbar;