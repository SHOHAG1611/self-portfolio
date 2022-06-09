import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <section class="">
            <nav class="navbar navbar-expand-lg navbar-style">
                <div class="container">
                    <a href='/' class="navbar-brand">Md Shohag</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a href='/' class="nav-link active" aria-current="page">Home</a>
                            <a href='/' class="nav-link">About</a>
                            <a href='/' class="nav-link">Login</a>

                        </div>
                    </div>
                </div>
            </nav>

        </section>
    );
};

export default Navbar;