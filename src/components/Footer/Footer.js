import React from "react";
import './footer.css';
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <section className='footer'>
            <div className='footer__left'>
                <Link to='/'>
                    <img className='footer__logo' src={logo} alt='logo' />
                </Link>
            </div>
            <div className='footer__links'>
                <Link to='/portfolio' className='footer__link'>
                    Portfolio
                </Link>
                <Link to='/about' className='footer__link'>
                    About Us
                </Link>
                <Link to='/contact' className='footer__link'>
                    Contact
                </Link>
                <div className='footer__button'>See Our Portfolio</div>
            </div>
        </section>
    );
}

export default Footer;