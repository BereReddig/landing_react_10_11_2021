import React from "react";
import './ideas.css';
import arrowImg from '../../assets/Group 6 (1).png';

const Ideas = (props)=> {
    return (
        <div className='ideas__contents'>
            <h2 className='ideas__headline'>
              Small team, 
              <br/>
              big ideas
            </h2>
            <a className='ideas__link' href=''>
                About Us
                <span className='arrow'>
                    <img src={arrowImg}/>
                </span>
            </a>
        </div>
    );
}

export default Ideas;