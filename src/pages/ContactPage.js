import React from 'react';
import { Container } from 'react-bootstrap';
import ContactMe from '../components/ContactMe';
import "../style/contact.css"
import { motion } from "framer-motion";

function ContactPage(props) {
    const { contactRef, controls, downUp, sideIn } = props
    return (
        <div ref={contactRef} id='contact'>
            <Container className='contact-page'>
                <motion.div initial="hidden"
                    animate={controls}
                    variants={downUp} style={{ width: "100%" }} className='page-title'>
                    <p>Võta ühendust</p>
                </motion.div>
                <motion.div initial="hidden"
                    animate={controls}
                    variants={sideIn} className='contact-forms'>
                    <ContactMe />
                </motion.div>
            </Container>
        </div>
    );
}

export default ContactPage;