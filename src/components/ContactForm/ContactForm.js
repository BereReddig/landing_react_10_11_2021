import React from "react";
import '../ContactForm/contactForm.css';
import arrowImg from '../../assets/Group 6 (1).png';

const ContactForm = () => {
    return (
        <section className='contact__form'>
            <h2 className='contact__form--headline'>
                Connect 
                <br/>
                with us
            </h2>
            <div className='form__container'>
                <form id='connect__form' action='#'>

                    <div className='form__input'>
                        <input id='Name' type='text' placeholder='Name'/>
                        <p className='form__error name'>Can't be empty</p>
                    </div>

                    <div className='form__input'>
                        <input id='email' type='email' placeholder='Email'/>
                        <p className='form__error name'>Can't be empty</p>
                    </div>

                    <div className='form__input'>
                        <textarea 
                            id='Message' 
                            name='message' 
                            placeholder='Message' 
                            // cols='30' 
                            // rows='30'
                        />
                        <p className='form__error name'>Can't be empty</p>
                    </div>
                    <div className='button__container'>
                        <button className='form__button' type='submit'>
                            <img className='form__arrow' src={arrowImg} />
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default ContactForm;