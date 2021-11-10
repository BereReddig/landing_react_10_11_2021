import React, { useState } from "react";
import './nav.css';
import logo from'../../assets/logo.svg';

const Nav = (props) => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
      };

    return (
        <nav>
            <div className='nav__logo--container'>
                <a href='index.html'>
                    <img className='logo' src={logo} alt='logo'/>
                </a>
            </div>
            <div className={isActive ? 'nav__links--container show': 'nav__links--container'}>
                <a className='nav__link' href='#'>Portfolio</a>
                <a className='nav__link' href='#'>About Us</a>
                <a className='nav__link' href='#'>Contact</a>
            </div>
            <div className={isActive ? 'hamburger__menu clicked': 'hamburger__menu'}
                onClick={toggleClass}
            >
                <div className='burger__line line1'></div>
                <div className='burger__line line2'></div>
                <div className='burger__line line3'></div>
            </div>
        </nav>
    );
}

export default Nav;