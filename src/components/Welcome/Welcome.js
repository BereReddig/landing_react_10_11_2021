import React from "react";
import './welcome.css';
import welcomeRightImg from '../../assets/home/desktop/image-welcome.jpg';

const Welcome = (props) => {
    return (
        <>
            <h2 className='welcome__title'>Welcome</h2>
            <div className='welcome__contents'>
                <div className='welcome__contents--left'>
                    <h2 className='welcome__heading'>
                        Welcome to<br/>
                        Arch Studio
                    </h2>
                    <p className='welcome__description'>
                        Welcome to Arch Studio We have a unique network and skillset to
                        help bring your projects to life. Our small team of highly
                        skilled individuals combined with our large network put us in a
                        strong position to deliver exceptional results. 
                        <br/>
                        <br/>
                        Over the past 10 years, we have worked on all kinds of projects.
                        From stations to high-rise buildings, we create spaces that
                        inspire and delight. 
                        <br/>
                        <br/>
                        We work closely with our clients so that we understand the
                        intricacies of each project. This allows us to work in harmony
                        the surrounding area to create truly stunning projects that will
                        stand the test of time.
              
                    </p>
                </div>
                <div className='welcome__contents--right'>
                    <img className='welcome__right--img' src={welcomeRightImg} alt='welcome right image'/>
                </div>
            </div>
        </>
    );
}

export default Welcome;