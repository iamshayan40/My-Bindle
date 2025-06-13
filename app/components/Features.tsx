"use client";

import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FeaturesSection = styled.section`
  padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 3vw, 2rem);
  background-color: #f7f7f7;
  font-family: var(--font-poppins);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(0.5rem, 2vw, 2rem);

  @media (max-width: 768px) {
    padding: 0 0.1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
  position: relative;
  padding: 0 clamp(1rem, 3vw, 2rem);
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 600;
  text-align: center;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  color: #171717;
  letter-spacing: -0.04em;
  margin-top: clamp(1rem, 3vw, 2rem);
  line-height: 1.1;
  font-family: var(--font-poppins);

  span {
    display: inline-block;
    color: #E85349;
    background: linear-gradient(120deg, #E85349, #ff6b61);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding: 0;
  }

  @media (max-width: 480px) {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  color: #000000;
  letter-spacing: -0.03em;
  font-family: var(--font-poppins);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 2vw, 1.5rem);
  padding: clamp(0.5rem, 2vw, 1rem) clamp(1rem, 4vw, 4rem);

  @media (max-width: 1200px) {
    padding: 1rem clamp(1rem, 3vw, 2rem);
    gap: 1.25rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
    gap: 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem 0.5rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background-color: #ffffff;
  padding: clamp(1.5rem, 3vw, 2rem);
  border-radius: 1.25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, transparent, rgba(231, 79, 69, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    padding: 1.75rem;
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const TitleRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: clamp(0.375rem, 1vw, 0.5rem);
  margin-bottom: clamp(0.5rem, 1.5vw, 0.75rem);
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  
  span {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    transform: scale(0.8);
    line-height: 1;
    display: inline-block;
  }

  @media (max-width: 640px) {
    span {
      font-size: 1.25rem;
    }
  }
`;

const FeatureTitle = styled.h3`
  font-size: clamp(1.15rem, 1.5vw, 1.33rem);
  font-weight: 600;
  color: #263644;
  letter-spacing: -0.02em;
  margin: 0;
  font-family: var(--font-poppins);

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.5;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  font-weight: 500;
  margin: 0;
  font-family: var(--font-poppins);
  max-width: 300px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const features = [
    {
      icon: "🔥",
      title: "Seamless Connections",
      description: "Stay in touch with friends, family, and like-minded people with just a tap."
    },
    {
      icon: "📸",
      title: "Share Your Story",
      description: "Upload photos, videos, and updates to let the world know what's happening in your life."
    },
    {
      icon: "💬",
      title: "Real-Time Chat",
      description: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging."
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "Your data, your control. We prioritize your privacy with world-class security."
    },
    {
      icon: "🌎",
      title: "Discover & Explore",
      description: "Find trending content, join communities, and follow pages that match your interests."
    },
    {
      icon: "💼",
      title: "Grow Your Business",
      description: "Use our platform to market your brand, connect with customers, and build meaningful relationships."
    }
  ];

  return (
    <FeaturesSection>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            Features That Keep You{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.2
              }}
            >
              Hooked!
            </motion.span>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: 0.3,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            Meet, Chat, Share - Anytime, Anywhere!
          </Subtitle>
        </Header>
        <Grid ref={ref}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1]
                }
              } : {}}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <TitleRow>
                <IconWrapper
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? {
                    scale: 1,
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.1
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
                  <motion.span 
                    className="emoji"
                    whileHover={{
                      scale: [1, 1.2, 1],
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    {feature.icon}
                  </motion.span>
                </IconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
              </TitleRow>
              <FeatureDescription>
                {feature.description}
              </FeatureDescription>
            </FeatureCard>
          ))}
        </Grid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;