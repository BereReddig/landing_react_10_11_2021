import React from "react";

import Hero from '../../components/Hero/Hero';
import Welcome from '../../components/Welcome/Welcome';
import Ideas from '../../components/Ideas/Ideas';
import Featured from '../../components/Featured/Featured';

const Home = () => {
    return (
        <>
            <section className='hero'>
                <Hero />
            </section>

            <section className='welcome'>
                <Welcome />
            </section>

            <section className='ideas'>
                <Ideas />
            </section>

            <section className='featured'>
                <Featured />
            </section>
            
        </>
    );
}

export default Home;