import React from 'react';
import { Container, Button } from 'react-bootstrap';
import "../style/about.css"
import { motion } from "framer-motion";

function AboutPage(props) {
    const { aboutRef, controls, downUp } = props

    return (
        <div ref={aboutRef} id='about'>
            <Container className='about-content'>
                <div

                    className='about-section-1'>
                    <motion.div initial="hidden"
                        animate={controls}
                        variants={downUp} className='page-title'>
                        <p>Minust</p>
                    </motion.div>
                    <motion.div initial="hidden"
                        animate={controls}
                        variants={downUp} className='about-title-2'>
                        <h2>Kes ma olen ja millega tegelen</h2>
                    </motion.div>
                    <motion.div initial="hidden"
                        animate={controls}
                        variants={downUp} className='long-dec'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus vitae nunc pharetra, in pretium ante egestas. Maecenas aliquet consectetur leo, at porta turpis semper at. Nullam tincidunt ultricies rhoncus. Aliquam vehicula a urna at dapibus. Mauris justo risus, convallis at elementum sed, ultricies sed lacus. Aliquam erat volutpat. Nulla facilisi. Phasellus ultricies elementum sem, non elementum erat imperdiet malesuada. Curabitur nibh dolor, finibus scelerisque pharetra in, auctor in tellus. Mauris placerat tortor at convallis pulvinar. Quisque tempor, arcu a iaculis convallis, magna nisi hendrerit urna, id viverra lacus turpis at felis. Morbi semper ligula a ullamcorper fermentum.
                            <br />

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus vitae nunc pharetra, in pretium ante egestas. Maecenas aliquet consectetur leo, at porta turpis semper at. Nullam tincidunt ultricies rhoncus. Aliquam vehicula a urna at dapibus. Mauris justo risus, convallis at elementum sed, ultricies sed lacus. Aliquam erat volutpat. Nulla facilisi. Phasellus ultricies elementum sem, non elementum erat imperdiet malesuada. Curabitur nibh dolor, finibus scelerisque pharetra in, auctor in tellus. Mauris placerat tortor at convallis pulvinar. Quisque tempor, arcu a iaculis convallis, magna nisi hendrerit urna, id viverra lacus turpis at felis. Morbi semper ligula a ullamcorper fermentum.
                        </p>
                    </motion.div>
                    <div className='button-box'>
                        <Button variant="success" id="CV-d">Lae CV alla</Button>
                    </div>
                </div>
                <div className='about-section-2'>
                    <motion.div initial="hidden"
                        animate={controls}
                        variants={downUp} className='big-pic'>
                        <img src='https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg'></img>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}

export default AboutPage;