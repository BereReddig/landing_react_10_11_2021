import React, { useState } from "react";
import { Link } from "react-router-dom";
import './nav.css';
import logo from '../../assets/logo.svg';

const Nav = (props) => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <section className='nav'>
            <nav>
                <div className='nav__logo--container'>
                    <Link to='/'>
                        <img className='logo' src={logo} alt='logo' />
                    </Link>
                </div>
                <div className={isActive ? 'nav__links--container show' : 'nav__links--container'}>
                    <Link to='/portfolio' className='nav__link' >
                        Portfolio
                    </Link>
                    <Link to='/about' className='nav__link'>
                        About Us
                    </Link>
                    <Link
                        className='nav__link'
                        to='/contact'
                    >
                        Contact
                    </Link>
                </div>
                <div className={isActive ? 'hamburger__menu clicked' : 'hamburger__menu'}
                    onClick={toggleClass}
                >
                    <div className='burger__line line1'></div>
                    <div className='burger__line line2'></div>
                    <div className='burger__line line3'></div>
                </div>
            </nav>
        </section>
    );
}

export default Nav;