import React from "react";
import '../About/about.css';

//Components
import HeroAbout from "../../components/HeroAbout/HeroAbout";
import HeritageAbout from "../../components/HeritageAbout/HeritageAbout";
import LeadersAbout from "../../components/LeadersAbout/LeadersAbout";

const About = () => {
    return (
        <>
            <HeroAbout/>

            <HeritageAbout/>

            <LeadersAbout/>
        </>
    );
}

export default About;