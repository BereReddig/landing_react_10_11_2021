import React from "react";
import blackArrow from '../../assets/black__arrow.png';
import '../ContactDetails/contactDetails.css';

const ContactDetails = () => {
    return (
        <section className='contact__details'>
            <div className='heritage__divider'></div>
            <div className='contact__details--container'>
                <div className='contact__details--left'>
                    <h2 className='contact__details--left--title'>
                        Contact
                        <br />
                        Details
                    </h2>
                </div>
                <div className='contact__details--list main'>
                    <div className='contact__details--text'>
                        <p className='location'>Main Office</p>
                        <p className='mail'>Mail: archone@mail.com</p>
                        <p className='address'>Address: 1892 Chenoweth Drive TN</p>
                        <p className='phone'>Phone: 802-456-3451</p>
                    </div>
                    <div className='view__container'>
                        <span className='view'>View on Map</span>
                        <span className='arrow__black'>
                            <img src={blackArrow} alt='blackArrow' />
                        </span>
                    </div>
                </div>
                <div className='contact__details--list office'>
                    <div className='contact__details--text'>
                        <p className='location'>Office II</p>
                        <p className='mail'>Mail: archtwo@mail.com</p>
                        <p className='address'>Address: 3399 Wines Lane TX</p>
                        <p className='phone'>Phone: 832-145-4321</p>
                    </div>
                    <div className='view__container'>
                        <span className='view'>View on Map</span>
                        <span className='arrow__black'>
                            <img src={blackArrow} alt='blackArrow' />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactDetails;