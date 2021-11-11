import React from "react";

const LeaderCard = ({ src, h3, p }) => {
    return (
        <div className='leaders__card'>
            <img className='leaders__image' src={src} alt={h3}/>
            <h3 className='leaders__name'>{h3}</h3>
            <p className='leaders__title'>{p}</p>
            <i className='fab fa-instagram fa-2x' aria-hidden="true"></i>
            <i className='fab fa-twitter fa-2x twit' aria-hidden="true"></i>
        </div>
    );
}

export default LeaderCard;