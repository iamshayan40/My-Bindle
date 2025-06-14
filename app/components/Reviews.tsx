"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

// ----------- DATA -----------
interface TestimonialData {
  id: number;
  stars: number;
  text: string;
  name: string;
  location: string;
  image: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    stars: 5,
    text: "Running my small business has never been easier! This app keeps me connected with my customers and helps me promote my products in a fun and interactive way.",
    name: "Javier L",
    location: "Spain",
    image: "/client-images/1.avif",
  },
  {
    id: 2,
    stars: 5,
    text: "The perfect blend of fun and functionality! I've made so many new friends and found amazing content. It's the only platform I check every day now.",
    name: "Lucas T",
    location: "Brazil",
    image: "/client-images/2.avif",
  },
  {
    id: 3,
    stars: 5,
    text: "I've tried many social platforms, but this one truly stands out! The interface is clean, the community is positive, and the features are so intuitive. Love every bit of it!",
    name: "Nora S",
    location: "Canada",
    image: "/client-images/3.avif",
  },
  {
    id: 4,
    stars: 5,
    text: "This platform brings people closer in the best way possible! The stories, reels, and sharing features are just what I needed to stay connected with my family abroad.",
    name: "Carlos V",
    location: "Argentina",
    image: "/client-images/4.avif",
  },
  {
    id: 5,
    stars: 5,
    text: "The privacy features are a game-changer, and I feel safer sharing my life online. Kudos to the team for thinking about user security seriously!",
    name: "Priya D",
    location: "India",
    image: "/client-images/5.avif",
  },
  {
    id: 6,
    stars: 5,
    text: "The design is sleek, the features are powerful, and the experience is seamless. Whether you're into content creation or just browsing, this app delivers!",
    name: "Alex F",
    location: "Australia",
    image: "/client-images/6.avif",
  },
  {
    id: 7,
    stars: 5,
    text: "I spend hours here without even realizing it. From trending topics to niche communities, this platform has it all. Great job, team!",
    name: "Isabella G",
    location: "Germany",
    image: "/client-images/7.avif",
  },
  {
    id: 8,
    stars: 5,
    text: "A social network that actually listens to its users! The updates keep getting better and better. Can't wait to see what's next!",
    name: "David M",
    location: "France",
    image: "/client-images/8.avif",
  },
];

// ------------- STYLED COMPONENTS -------------
const SectionContainer = styled.section`
  background-color: rgba(247, 247, 247, 0.94);
  padding: 2rem 4rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2.6rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

interface TestimonialCardProps {
  $isFaded?: boolean;
}

const TestimonialCard = styled(motion.div)<TestimonialCardProps>`
  background: rgb(231, 231, 231);
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;
  box-sizing: border-box;
  transition: all 0.3s ease;

  ${(props) =>
    props.$isFaded &&
    `
    mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
  `}

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
  }
`;

const StarsContainer = styled.div`
  color: #ffc107;
  margin-bottom: 0.4rem;
  font-size: 1.2rem;
`;

const TestimonialText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 1.4rem;
  flex-grow: 1;
`;

const UserInfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h4`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: #333;
`;

const UserLocation = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #777;
`;

const SeeMoreButton = styled.button`
  background: #f0f0f0;
  border: none;
  border-radius: 15px;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #e53935;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  position: relative;
  flex-shrink: 0;
`;

// ------------ ANIMATION VARIANTS ------------
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const 
    } 
  },
};

// -------------- COMPONENT -------------------
const Testimonial: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTestimonials = isMobile
    ? testimonials.slice(0, 3)
    : testimonials;

  return (
    <SectionContainer>
      <SectionTitle>What Our Users Say</SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CardsContainer>
          {visibleTestimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              variants={cardVariants}
              $isFaded={i === 6 || i === 7}
              style={
                isMobile
                  ? {}
                  : i === 6
                  ? { gridColumn: "1 / 2" }
                  : i === 7
                  ? { gridColumn: "3 / 4" }
                  : {}
              }
            >
              <StarsContainer>{"★".repeat(t.stars)}</StarsContainer>
              <TestimonialText>{t.text}</TestimonialText>
              <UserInfoSection>
                <ImageWrapper>
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </ImageWrapper>
                <UserDetails>
                  <UserName>{t.name}</UserName>
                  <UserLocation>{t.location}</UserLocation>
                </UserDetails>
              </UserInfoSection>
            </TestimonialCard>
          ))}
        </CardsContainer>
      </motion.div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: isMobile ? "2rem" : "-10rem",
        }}
      >
        <SeeMoreButton>See More</SeeMoreButton>
      </div>
    </SectionContainer>
  );
};

export default Testimonial;
