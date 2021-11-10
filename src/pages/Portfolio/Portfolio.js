import React from "react";
import PortfolioImage from '../../components/PortfolioImage/PortfolioImage';
import data_Portfolio from '../../data_portfolio.json';
import './portfolio.css';

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <div className='portfolio__images--container'>
                {data_Portfolio.map((item) => {
                    return (
                        <PortfolioImage 
                            className={'featured__image--card ' + item.image.className} 
                            h3={item.image.h3} 
                            p={item.image.p} 
                        />    
                    );
                })}
            </div>
        </section>
    );
}

export default Portfolio;