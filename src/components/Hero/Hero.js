import React, { useState } from "react";
import './hero.css';
import data_heroSlider from '../../data_heroSlider.json';
import Slide from "./Slide/Slide";

const Hero = () => {
    const [currentSlide, setCurrent] = useState(1);

    return (
        <div className='slider'>
            {data_heroSlider.map((item, index)=>{
                return (
                    <Slide 
                        key={index}
                        setClass={currentSlide == index + 1 ? 'slide current' : 'slide'}
                        titel_1={item.titel_1}
                        title_2={item.title_2}
                        description={item.description}
                    />
                )
            })}

            <div id='prev' 
                className='button'
                onClick={() => {(currentSlide > 1) ? setCurrent(currentSlide - 1) : setCurrent(data_heroSlider.length)}}
            >
                <i className='fas fa-arrow-left' aria-hidden='true'/>
            </div>
            <div id='next' 
                className='button'
                onClick={() => {(currentSlide < data_heroSlider.length) ? setCurrent(currentSlide + 1) : setCurrent(1)}}
            >
                <i className='fas fa-arrow-right' aria-hidden='true'/>
            </div>
        </div>
    );
}

export default Hero;