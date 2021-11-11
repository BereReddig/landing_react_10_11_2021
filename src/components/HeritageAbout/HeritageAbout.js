import React from "react"
import '../HeritageAbout/heritageAbout.css';

const HeritageAbout = () => {
    return (
        <section className='heritage'>
            <div className='heritage__container'>
                <div className='heritage__left'>
                    <div className='heritage__divider'></div>
                    <h2 className='heritage__headline'>
                        Our
                        <br />
                        Heritage
                    </h2>
                    <div className='heritage__description'>
                        Founded in 2007, we started as a trio of architects. Our
                        complimentary skills and relentless attention to detail turned
                        Arch into one of the most sought after boutique firms in the
                        country.
                        <br className='dh1' />
                        Speciliazing in Urban Design allowed us to focus on creating
                        exceptional structures that live in harmony with their
                        surroundings. We consider every detail from every surrounding
                        element to inform our designs.
                        <br className='dh1' />
                        Our small team of world-class professionals provides input on
                        every project.
                    </div>
                </div>
                <div className='heritage__right'></div>
            </div>
        </section>
    );
}

export default HeritageAbout;

