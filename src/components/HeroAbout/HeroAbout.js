import React from "react"
import '../HeroAbout/heroAbout.css';

const HeroAbout = () => {
    return (
        <section className='about__hero'>
            <div className='about__hero--container'>
                <div className='about__hero--left'>
                    <div className='about__hero--left--block'></div>
                </div>
                <div className='about__hero--right'>
                    <h1 className='about__headline--large'>About</h1>
                    <div className='about__separator'></div>

                    <h2 className='about__right--headline'>
                        Your team of
                        <br />
                        professionals
                    </h2>
                    <p className='about__hero--right--description'>
                        Our small team of world-class professionals will work with you
                        every step of the way. Strong relationships are at the core of
                        everything we do. This extends to the relationship our projects
                        have with their surroundings.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HeroAbout;

