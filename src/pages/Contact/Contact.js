import React from "react";
import ContactHero from "../../components/ContactHero/ContactHero";
import ContactDetails from '../../components/ContactDetails/ContactDetails';
import ContactMap from "../../components/ContactMap/ContactMap";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
    return (
        <>
            <ContactHero/>
            <ContactDetails/>
            <ContactMap/>
            <ContactForm/>
        </>
    );
}

export default Contact;