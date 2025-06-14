"use client";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

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
    text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.",
    name: "Javier L",
    location: "Spain",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    id: 2,
    stars: 5,
    text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
    name: "Lucas T",
    location: "Brazil",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
  },
  {
    id: 3,
    stars: 5,
    text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense.",
    name: "Nora S",
    location: "Canada",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    id: 4,
    stars: 5,
    text: "This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment is made special here.",
    name: "Carlos V",
    location: "Argentina",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    id: 5,
    stars: 5,
    text: "The privacy features are a game-changer, and I feel safer sharing my life online. It's a social network that actually listens to its users!",
    name: "Priya D",
    location: "India",
    image: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67",
  },
  {
    id: 6,
    stars: 5,
    text: "The design is sleek, the features are powerful, and the experience is seamless. It just feels good to use, making every interaction feel natural.",
    name: "Alex F",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },
  {
    id: 7,
    stars: 5,
    text: "This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment is filled with joy.",
    name: "Isabella G",
    location: "Germany",
    image: "https://images.unsplash.com/photo-1659353218140-7f8f9da943fc",
  },
  {
    id: 8,
    stars: 5,
    text: "A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless. Highly recommended.",
    name: "David M",
    location: "France",
    image: "https://plus.unsplash.com/premium_photo-1675129779582-d84b954f2397",
  },
];

const scroll = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

const SectionContainer = styled.section`
  background-color: #f7f7f7;
  padding: 2rem 4rem;
  text-align: center;
  position: relative;

  @media (max-width: 1024px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2.6rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 3rem;

  span {
    color: #e9655b;
  }

  @media (max-width: 1024px) {
    font-size: 2.4rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 90%;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 600px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 100px; /* Default fade height for large screens */
    z-index: 5;
    pointer-events: none;
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, #f7f7f7 0%, transparent 70%); /* Softer fade */
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, #f7f7f7 0%, transparent 70%); /* Softer fade */
  }

  @media (max-width: 1024px) {
    height: 520px;
    &::before,
    &::after {
      height: 80px;
    }
  }

  @media (max-width: 768px) {
    height: 450px;
    &::before,
    &::after {
      height: 60px;
    }
  }

  @media (max-width: 480px) {
    height: 400px;
    &::before,
    &::after {
      height: 50px;
    }
  }
`;

const CarouselContent = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${scroll} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const TestimonialCard = styled.div`
  background: #f7f7f7;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid transparent;
  transform: translateZ(0);
  background-clip: padding-box;

  @media (max-width: 768px) {
    padding: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const StarsContainer = styled.div`
  color: #ffc107;
  margin-bottom: 0.4rem;
  font-size: 1.3rem;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const UserInfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #eee;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const UserLocation = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #777;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const SeeMoreButton = styled.button`
  margin-top: 3rem;
  padding: 0.9rem 4rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: #e9655b;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d4564e;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(233, 101, 91, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 3rem;
    margin-top: 2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 2rem;
    font-size: 0.9rem;
  }
`;

const generateCarousel = (items: TestimonialData[], columnIndex: number) => {
  const duplicatedItems = [...items, ...items]; // infinite scroll effect

  return (
    <CarouselContainer key={columnIndex}>
      <CarouselContent>
        {duplicatedItems.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`}>
            <StarsContainer>{"★".repeat(testimonial.stars)}</StarsContainer>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <UserInfoSection>
              <UserImage src={testimonial.image} alt={testimonial.name} />
              <UserDetails>
                <UserName>{testimonial.name}</UserName>
                <UserLocation>{testimonial.location}</UserLocation>
              </UserDetails>
            </UserInfoSection>
          </TestimonialCard>
        ))}
      </CarouselContent>
    </CarouselContainer>
  );
};

const Testimonial: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Use 768px as mobile breakpoint
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SectionContainer>
      <SectionTitle>
        What Our Users <span>Say</span>
      </SectionTitle>
      <CardsContainer>
        {isMobile ? (
          // Single carousel column for mobile, showing first 4 testimonials
          generateCarousel(testimonials.slice(0, 4), 0) 
        ) : (
          // Three carousel columns for desktop/tablet
          <>
            {generateCarousel([testimonials[0], testimonials[3], testimonials[6]], 0)}
            {generateCarousel([testimonials[1], testimonials[4], testimonials[7]], 1)}
            {generateCarousel([testimonials[2], testimonials[5]], 2)}
          </>
        )}
      </CardsContainer>
      <SeeMoreButton>See More</SeeMoreButton>
    </SectionContainer>
  );
};

export default Testimonial;
