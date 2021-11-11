import React from "react";
import './contactHero.css';

const ContactHero = () => {
    return (
        <section className='contact__hero'>
            <div className='contact__hero--container'>
                <div className='contact__hero--left'>
                    <div className='contact__hero--left--block'></div>
                </div>
                <div className='contact__hero--right'>
                    <h1 className='contact__headline--large'>Contact</h1>
                    <div className='contact__separator'></div>

                    <h2 className='contact__right--headline'>
                        Tell us about
                        <br />
                        your project
                    </h2>
                    <p className='contact__hero--right--description'>
                        We’d love to hear more about your project. Please, leave a
                        message below or give us a call. We have two offices, one in
                        Texas and one in Tennessee. If you find yourself nearby, come
                        say hello!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ContactHero;