import React from "react";
import './slide.css';

const Slide = ({ setClass, titel_1, title_2, description }) => {
    return (
            <div className={setClass}>
                <div className='content'>
                    <h1 className='slide__title'>{titel_1}</h1>
                    <h1 className='slide__title two'>{title_2}</h1>
                    <p className='slide__desc'>
                        {description}
                    </p>
                    <a className='slide__link' href='#'>See Our Portfolio</a>
                </div>
            </div>
    );
}

export default Slide;