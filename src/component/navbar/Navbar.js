import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaHamburger } from "react-icons/fa";

import "./style.css";
const Navbar = () => {

    const [showMedia , setShowMedia] = useState(false);

    return (
        <>
            <nav className='main-nav'>
                <div className='logo'>

                    <h2>
                        <span>T</span>hapa
                        <span>T</span>echnical
                    </h2>

                </div>
                
                <div className={showMedia ? "menu-link mobile-menu-link" : 'menu-link'}>
                    <ul>

                        <li> <a href='#'>Home</a></li>
                        <li> <a href='#'>About</a></li>
                        <li> <a href='#'>Services</a></li>
                        <li> <a href='#'>Contact</a></li>

                    </ul>
                </div>

                <div className='social-media'>
                    <ul className='social-media-desktop'>
                        <li><a href='#'><FaFacebookSquare className='facebook' /></a></li>
                        <li><a href='#'><FaInstagramSquare className='instagram' /> </a></li>
                        <li><a href='#'><FaYoutubeSquare className='youtube' /> </a></li>
                    </ul>
                    <div className='hamburger-menu'>
                        <a href='#' onClick={()=>setShowMedia(!showMedia)} ><FaHamburger /> </a>
                    </div>

                </div>

            </nav>

            <section className='hero-section'>
                <p>Welcome to</p>
                <h1>Thapa Technical</h1>
            </section>
        </>
    );
}

export default Navbar;
