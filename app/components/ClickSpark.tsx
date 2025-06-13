"use client";

import styled from 'styled-components';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const FeaturesSection = styled.section`
  padding: 0rem 12rem;
  background-color: #fff;
  font-family: var(--font-poppins);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ImageSection = styled(motion.div)`
  flex: 1;
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 9rem;
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

  @media (max-width: 1024px) {
    min-height: 400px;
    width: 100%;
    order: 2;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    order: 1;
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
  font-size: 3.3rem;
  font-weight: 600;
  color: #171717;
  letter-spacing: -0.06em;
  line-height: 1;
  margin-bottom: 1rem;
  perspective: 1000px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
    span {
    color: #E9665C;
}
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  color: #666;
  line-height: 1.2;
  margin-top: -1.2rem;
  max-width: 540px;
`;

const FeaturesList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: #171717;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.5;
  font-size: 1rem;
  margin: 0;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 1.2rem;
  border-radius: 1rem;
  box-shadow: 
    5px 10px 20px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(231, 79, 69, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  transform-style: preserve-3d;
  
  &:before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    background: conic-gradient(
      from 0deg at 50% 50%,
      #E9665C,
      #FF9B64,
      #FFB171,
      #7C3AED,
      #3B82F6,
      #E9665C
    );
    opacity: 0;
    z-index: -2;
    transition: opacity 0.4s ease;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: calc(1rem - 1px);
    background: rgba(255, 255, 255, 0.9);
    z-index: -1;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: perspective(1000px) translateZ(30px) rotateX(2deg);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.1),
      0 5px 15px rgba(231, 79, 69, 0.1);
  }

  &:hover:before {
    opacity: 1;
    animation: spin 4s linear infinite;
  }

  &:hover:after {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }

  &:hover ${FeatureTitle} {
    transform: translateZ(20px);
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  &:hover ${FeatureDescription} {
    transform: translateZ(15px);
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const MobileImage = styled(Image)`
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
`;

const Features = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageRotate = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

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
          initial={{ opacity: 0, rotateY: 30, scale: 0.8 }}
          animate={isInView ? { 
            opacity: 1, 
            rotateY: 0, 
            scale: 1,
            transition: {
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1]
            }
          } : {}}
          style={{ 
            rotateY: imageRotate,
            scale: imageScale
          }}
        >
          <MobileImage
            src="/Features Section/2mobiles.svg"
            alt="MyBindle App Interface"
            width={600}
            height={700}
            priority
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(231, 79, 69, 0.15))'
            }}
          />
        </ImageSection>

        <ContentSection>
          <Title
            initial={{ 
              opacity: 0,
              rotateX: -30,
              y: 50,
              scale: 0.9
            }}
            animate={isInView ? {
              opacity: 1,
              rotateX: 0,
              y: 0,
              scale: 1,
              transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
              }
            } : {}}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }
              } : {}}
            >
              Where Every Click
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }
              } : {}}
            >
              Sparks a <span>Connection!</span>
            </motion.div>
          </Title>

          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1]
              }
            } : {}}
          >
            A small act of kindness today can create a lifetime of impact for someone in
            need. Give from the heart and change a life!
          </Description>

          <FeaturesList>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ 
                  opacity: 0,
                  x: -50,
                  scale: 0.9
                }}
                animate={isInView ? {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.6 + index * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }
                } : {}}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { 
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <FeatureTitle>
                  <motion.span
                    className="emoji"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? {
                      scale: 1,
                      rotate: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.8 + index * 0.15
                      }
                    } : {}}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, -5, 5, 0],
                      transition: {
                        duration: 0.6,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    {feature.icon}
                  </motion.span>
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