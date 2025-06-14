"use client";

import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const FeaturesSection = styled.section`
  padding: 0 clamp(1rem, 8vw, 12rem);
  background-color: #f7f7f7;
  font-family: var(--font-poppins);
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding: 0 clamp(1rem, 5vw, 6rem);
  }

  @media (max-width: 768px) {
    padding: 0 clamp(1rem, 3vw, 2rem);
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  gap: clamp(2rem, 4vw, 4rem);
  padding: clamp(2rem, 4vw, 4rem) 0;

  @media (max-width: 1200px) {
    gap: 3rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const ImageSection = styled(motion.div)`
  flex: 1;
  position: relative;
  min-height: clamp(400px, 48vh, 580px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: clamp(4rem, 9vw, 9rem);
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    width: 80%;
    height: 80%;
    background: radial-gradient(circle, rgba(231, 79, 69, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    filter: blur(40px);
    z-index: -1;
  }

  @media (max-width: 1200px) {
    min-height: 500px;
    margin-bottom: 6rem;
  }

  @media (max-width: 1024px) {
    min-height: 400px;
    width: 100%;
    order: 2;
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    min-height: 350px;
    margin-bottom: 3rem;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2rem);
  max-width: 600px;

  @media (max-width: 1024px) {
    order: 1;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    padding: 0 clamp(1rem, 3vw, 2rem);
  }
`;

const ColoredSpan = styled.span`
  color: #E9665C;
  display: inline-block;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #E9665C;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 4vw, 3.3rem);
  font-weight: 600;
  color: #171717;
  letter-spacing: -0.06em;
  line-height: 1.1;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  perspective: 1000px;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.25rem;
  }

  span {
    color: #E9665C;
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  color: #666;
  line-height: 1.4;
  margin-top: clamp(-1rem, -2vw, -1.2rem);
  max-width: 540px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    margin-top: -1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-top: -0.5rem;
  }
`;

const FeaturesList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 1.5vw, 1rem);
  width: 100%;

  @media (max-width: 1024px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const FeatureTitle = styled.h3`
  font-size: clamp(1rem, 1.3vw, 1.15rem);
  font-weight: 600;
  color: #171717;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.5rem, 1vw, 0.75rem);
  margin: 0;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;

  svg {
    width: clamp(1.25rem, 1.75vw, 1.5rem);
    height: clamp(1.25rem, 1.75vw, 1.5rem);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    gap: 0.5rem;
  }
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.5;
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  margin: 0;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: clamp(1rem, 1.5vw, 1.2rem);
  border-radius: 1rem;
  box-shadow: 
    5px 10px 20px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(231, 79, 69, 0.05);
  display: flex;
  flex-direction: column;
  gap: clamp(0.375rem, 0.75vw, 0.5rem);
  position: relative;
  isolation: isolate;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  cursor: pointer;
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, 
      rgba(233, 102, 92, 0.08),
      rgba(255, 155, 100, 0.06),
      rgba(255, 177, 113, 0.03),
      transparent
    );
    opacity: 0;
    z-index: -2;
    transition: opacity 0.3s ease;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: calc(1rem - 1px);
    background: rgba(255, 255, 255, 0.95);
    z-index: -1;
    transition: all 0.4s ease;
  }

  &:hover {
    box-shadow: 0 8px 20px 0 rgba(233,102,92,0.08), 0 2px 8px 0 rgba(0,0,0,0.03);
    border: 1.5px solid #e9665c20;
    transform: translateY(-5px) scale(1.01);
    
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const MobileImage = styled(Image)`
  width: auto;
  height: auto;
  max-width: 95%;
  max-height: 580px;
  object-fit: contain;
`;

const Features = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  

  const features = [
    {
      icon: "🎬",
      title: "Short Videos & Reels",
      description: "Share engaging, bite-sized content that keeps everyone entertained."
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description: "Stay updated on what matters without the noise."
    },
    {
      icon: "👥",
      title: "Interest-Based Communities",
      description: "Join groups and discussions that match your passion."
    }
  ];

  return (
    <FeaturesSection ref={ref}>
      <Container ref={containerRef}>
        <ImageSection
          whileHover={{
            scale: 1.02,
            transition: {
              duration: 0.03,
              ease: "easeInOut"
            }
          }}
        >
          <MobileImage
            src="/Features Section/2mobiles.svg"
            alt="MyBindle App Interface"
            width={550}
            height={680}
            priority
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(231, 79, 69, 0.15))'
            }}
          />
        </ImageSection>

        <ContentSection>
          <Title>
            <div>
              Where Every Click
            </div>
            <div>
              Sparks a <span>Connection!</span>
            </div>
          </Title>

          <Description>
            A small act of kindness today can create a lifetime of impact for someone in
            need. Give from the heart and change a life!
          </Description>

          <FeaturesList>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
              >
                <FeatureTitle>
                  <span>
                    {feature.icon}
                  </span>
                  {feature.title}
                </FeatureTitle>
                <FeatureDescription>
                  {feature.description}
                </FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesList>
        </ContentSection>
      </Container>
    </FeaturesSection>
  );
};

export default Features;