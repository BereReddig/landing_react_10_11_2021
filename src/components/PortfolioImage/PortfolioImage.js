import React from "react";

const PortfolioImage = ({ className, h3, p }) => {
    return (
        <div className={className}>
            <div className='featured__image--text'>
                <h3>{h3}</h3>
                <p>{p}</p>
            </div>
        </div>
    );
}

export default PortfolioImage;