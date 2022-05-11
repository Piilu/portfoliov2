import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../style/first.css"
import {motion } from "framer-motion";


function FirstPage(props) {
  const { firstRef, controls,firstText,landingPic } = props
  return (
    <div ref={firstRef}

      className="square" id='first'>
      <Container className='first-content'>
        <motion.div animate={controls}
          initial="hidden"
          variants={landingPic} className='picture-box'>
          <img src='https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/42988641_2051163764922416_5642538187340382208_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=GVcBe4N6CdcAX_RFpom&_nc_ht=scontent-arn2-1.xx&oh=00_AT-9q6jDMwzWrjsQmCfDCSaYdGI87sSFVhCRt9o--x1k1Q&oe=6297C0F6'></img>
        </motion.div>
        <motion.h1 initial="hidden"
          animate={controls}
          variants={firstText}>Ma olen Nimi</motion.h1>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={firstText} className='short-dec'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus vitae nunc pharetra, in pretium ante egestas. Maecenas aliquet consectetur leo, at porta turpis semper at.</p>
        </motion.div>
      </Container>
    </div>
  );
}

export default FirstPage;