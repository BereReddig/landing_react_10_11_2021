import React, { useState } from "react";
import './hero.css';
import data_heroSlider from '../../data_heroSlider.json';
import Slide from "./Slide/Slide";

const Hero = (props) => {
    const [isCurrent, setCurrent] = useState(true);

    const toggleClass = () => {
        setCurrent(!isCurrent);
    };

    return (
        <div className='slider'>
            {data_heroSlider.map((slide, index)=>{
                return (
                    <Slide 
                        setClass={isCurrent ? 'slide current' : 'slide'}
                        titel_1={slide.slide.titel_1}
                        title_2={slide.slide.title_2}
                        description={slide.slide.description}
                    />
                )
            })}

            <div id='prev' 
                className='button'
                onClick={toggleClass}
            >
                <i className='fas fa-arrow-left' aria-hidden='true'/>
            </div>
            <div id='next' 
                className='button'
                onClick={toggleClass}
            >
                <i className='fas fa-arrow-right' aria-hidden='true'/>
            </div>
        </div>
    );
}

export default Hero;