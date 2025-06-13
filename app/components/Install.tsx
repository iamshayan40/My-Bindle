"use client";
import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

const Container = styled(motion.div)`
  background: #F7F7F7;
  padding: 0 0 clamp(24px, 4vw, 32px) 0;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 0 16px 0;
    margin-top: -20px;
  }
`;

const Title = styled(motion.h1)`
  text-align: center;
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 700;
  margin-top: 0;
  margin-bottom: clamp(8px, 1.5vw, 12px);
  color: #181818;
  font-family: 'Poppins', Arial, sans-serif;
  letter-spacing: -1px;
  position: relative;
  z-index: 1;
  padding: 0 clamp(1.5rem, 3vw, 2rem);
  line-height: 1.2;

  span {
    color: #E9665C;
    position: relative;
    display: inline-block;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    letter-spacing: -0.5px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    padding: 0;
  }
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  font-size: clamp(15px, 1.5vw, 17px);
  color: #222;
  margin-bottom: clamp(12px, 2vw, 16px);
  margin-top: 20px;
  letter-spacing: -0.3px;
  font-family: 'Poppins', Arial, sans-serif;
  font-weight: 400;
  position: relative;
  z-index: 1;
  padding: 0 clamp(1rem, 5vw, 3rem);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 1.6;
    opacity: 0.9;
    max-width: 320px;
    margin-bottom: 24px;
    padding: 0 1rem;
  }
`;

const StepsRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: clamp(12px, 2vw, 16px);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  padding: 0 clamp(1rem, 3vw, 2rem);

  @media (max-width: 480px) {
    width: 85%;
    background: rgba(255, 255, 255, 0.5);
    padding: 12px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    backdrop-filter: blur(10px);
    margin-bottom: 24px;
  }
`;

const Step = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: clamp(60px, 8vw, 80px);
`;

const StepNumber = styled(motion.div)<{ $active?: boolean }>`
  font-size: clamp(22px, 2.5vw, 28px);
  font-weight: 600;
  color: ${({ $active }) => ($active ? '#E9665C' : '#181818')};
  font-family: 'Poppins', Arial, sans-serif;
  letter-spacing: 1px;
  margin-bottom: 2px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  position: relative;
  
  ${({ $active }) => $active && `
    &::before {
      content: '';
      position: absolute;
      inset: -8px;
      background: radial-gradient(circle, rgba(233, 102, 92, 0.1) 0%, rgba(233, 102, 92, 0) 70%);
      border-radius: 50%;
      z-index: -1;
    }
  `}
  
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 2px 12px 0 rgba(233,102,92,0.10);
    cursor: pointer;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Line = styled.div`
  flex: 1;
  height: 2px;
  background: ${props => `linear-gradient(90deg, 
    #d9d9d9 0%, 
    #e9665c 50%,
    #d9d9d9 100%
  )`};
  margin: 0 clamp(8px, 1.5vw, 14px);
  border-radius: 1px;
  opacity: 0.5;

  @media (max-width: 480px) {
    background: #d9d9d9;
    height: 1.5px;
  }
`;

const CardsRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: clamp(16px, 2vw, 24px);
  margin-top: clamp(6px, 1vw, 8px);
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  padding: 0 clamp(1rem, 3vw, 2rem);
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 18px;
    margin-top: 8px;
    padding: 0 18px;
  }

  @media (max-width: 480px) {
    padding: 0 18px;
  }
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(233,102,92,0.10), 0 2px 8px 0 rgba(0,0,0,0.06);
  border: 1.5px solid #ececec;
  padding: clamp(24px, 3vw, 30px) clamp(24px, 3vw, 34px);
  width: clamp(280px, 30%, 350px);
  text-align: center;
  font-family: 'Poppins', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  will-change: transform;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent, rgba(233, 102, 92, 0.03), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 16px 48px 0 rgba(233,102,92,0.16), 0 2px 8px 0 rgba(0,0,0,0.08);
    border: 1.5px solid #e9665c33;
    transform: translateY(-10px) scale(1.035);
    cursor: pointer;
    
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    min-width: unset;
    margin-bottom: 0;
    padding: 20px 12px;
  }
`;

const CardTitle = styled.div`
  font-size: clamp(16px, 1.8vw, 18px);
  font-weight: 600;
  margin-bottom: clamp(5px, 0.8vw, 7px);
  color: #181818;
  font-family: 'Poppins', Arial, sans-serif;
  position: relative;

  @media (max-width: 768px) {
    font-size: 17px;
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 8px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 2px;
      background: linear-gradient(90deg, rgba(233, 102, 92, 0), rgba(233, 102, 92, 0.3), rgba(233, 102, 92, 0));
      border-radius: 1px;
    }
  }
`;

const CardDesc = styled.div`
  font-size: clamp(13px, 1.4vw, 14px);
  color: #222;
  font-family: 'Poppins', Arial, sans-serif;
  line-height: 1.5;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    max-width: 100%;
    margin: 0 auto;
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.25 } }
};

const stepsRowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.4 } }
};

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const cardsRowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.7 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
};

const Install: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Container
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Title variants={titleVariants}>How to Install Our <span>App</span></Title>
      <Subtitle variants={subtitleVariants}>
        Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
      </Subtitle>
      <StepsRow variants={stepsRowVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <Step variants={stepVariants}>
          <StepNumber $active variants={stepVariants}>01</StepNumber>
        </Step>
        <Line />
        <Step variants={stepVariants}>
          <StepNumber variants={stepVariants}>02</StepNumber>
        </Step>
        <Line />
        <Step variants={stepVariants}>
          <StepNumber variants={stepVariants}>03</StepNumber>
        </Step>
      </StepsRow>
      <CardsRow variants={cardsRowVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <Card variants={cardVariants} whileHover={{ scale: 1.035, y: -10, boxShadow: "0 16px 48px 0 rgba(233,102,92,0.16), 0 2px 8px 0 rgba(0,0,0,0.08)", border: "1.5px solid #e9665c33" }}>
          <CardTitle>Download</CardTitle>
          <CardDesc>Open Play Store or App Store</CardDesc>
        </Card>
        <Card variants={cardVariants} whileHover={{ scale: 1.035, y: -10, boxShadow: "0 16px 48px 0 rgba(233,102,92,0.16), 0 2px 8px 0 rgba(0,0,0,0.08)", border: "1.5px solid #e9665c33" }}>
          <CardTitle>Install App</CardTitle>
          <CardDesc>The app will install automatically.</CardDesc>
        </Card>
        <Card variants={cardVariants} whileHover={{ scale: 1.035, y: -10, boxShadow: "0 16px 48px 0 rgba(233,102,92,0.16), 0 2px 8px 0 rgba(0,0,0,0.08)", border: "1.5px solid #e9665c33" }}>
          <CardTitle>Ready to Use</CardTitle>
          <CardDesc>Sign up or log in to start exploring!</CardDesc>
        </Card>
      </CardsRow>
    </Container>
  );
};

export default Install;
