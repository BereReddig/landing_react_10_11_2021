import React, { isValidElement } from "react";
import './featured.css';
import arrowImg from '../../assets/Group 6 (1).png';

const Featured = (props) => {
    return(
        <>
            <div className='featured__title--container'>
                <h2 className='featured__title'>Featured</h2>
                <a className='featured__button' href=''>
                    See All
                    <span className='arrow'>
                        <img src={arrowImg}/>
                    </span>
                </a>
            </div>
            <div className='featured__images--container'>
                <div className='featured__image--card sol'>
                    <div className='featured__image--text'>
                        <h3>Project Del Sol</h3>
                        <p>View All Projects</p>
                        <div className='featured__card--number'>1</div>
                    </div>
                </div>
                <div className='featured__image--card tower'>
                    <div className='featured__image--text'>
                        <h3>228B Tower</h3>
                        <p>View All Projects</p>
                        <div className='featured__card--number'>2</div>
                    </div>
                </div>
                <div className='featured__image--card proto'>
                    <div className='featured__image--text'>
                        <h3>Le Prototype</h3>
                        <p>View All Projects</p>
                        <div className='featured__card--number'>3</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featured;