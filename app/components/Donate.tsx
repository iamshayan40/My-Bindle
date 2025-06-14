"use client";
import styled from "styled-components";
import Image from "next/image"; // Import Image component for Next.js optimized images
import { useEffect, useRef } from "react";
import gsap from "gsap";

const DonateSection = styled.section`
  background-color: #ff594f;
  padding: 5rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3.5rem;
  border-radius: 1.5rem;
  max-width: 1400px;
  margin: 5rem auto;
  position: relative;
  overflow: hidden; // 🔥 prevent image spill
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  background-position: center;

  @media (max-width: 1440px) {
    padding: 4rem 5rem;
    max-width: 1200px;
    gap: 3rem;
  }

  @media (max-width: 1280px) {
    padding: 3.5rem 4rem;
    max-width: 1100px;
    gap: 2.5rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
    gap: 2.5rem;
    margin: 3rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 1.25rem;
    margin: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 1rem;
    margin: 2rem 1rem;
  }
`;



const ContentColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  font-family: var(--font-poppins);
  z-index: 1;
  max-width: 600px;

  @media (min-width: 1280px) {
    max-width: 640px;
  }

  @media (max-width: 1024px) {
    align-items: center;
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3.2rem);
  font-weight: 500;
  line-height: 1.1;
  margin-left: -0.7rem;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  letter-spacing: -0.03em;

  @media (max-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 0.7rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: clamp(0.875rem, 1.2vw, 1.05rem);
  line-height: 1.5;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  opacity: 0.9;
  max-width: 1000px;
  margin-left: -0.7rem;

  @media (max-width: 1024px) {
    max-width: 600px;  
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const DonateButton = styled.button`
  background-color: #fff;
  color: #e9665c;
  padding: clamp(0.6rem, 1vw, 0.8rem) clamp(1.5rem, 3vw, 2rem);
  border-radius: 0.55rem;
  border: none;
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  font-weight: 600;
  margin-bottom: 6rem;
  margin-left: -0.7rem;
  margin-top: -1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #f0f0f0;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  min-height: 280px;
  width: 100%;
  max-width: 600px; // 🔒 restrict container width
  margin-top: 1rem;

  @media (min-width: 1280px) {
    min-height: 360px;
    max-width: 650px;
  }

  @media (max-width: 1024px) {
    min-height: 250px;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    min-height: 200px;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    min-height: 90px;
    margin-bottom: 1.5rem;
  }
`;


const StyledImage = styled(Image)`
  width: auto;
  height: auto;
  max-width: 700px;
  object-fit: contain;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));
  position: absolute;
  bottom: -110px;
  left: 50%;
  transform: translateX(-65%);

  @media (max-width: 768px) {
    max-width: none;
    width: auto;
    height: 350px;
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    height: 300px; // aur chhoti screen pe aur bhi bada
  }
`;



export default function Donate() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(buttonRef.current,
      {
        opacity: 0,
        scale: 0.5,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "elastic.out(1.2, 0.5)",
        boxShadow: "0 0 20px rgba(255,255,255,0.5)",
        onComplete: () => {
          gsap.to(buttonRef.current, {
            boxShadow: "0 5px 15px rgba(231, 79, 69, 0.3)",
            duration: 1
          });
        }
      }
    );
  }, []);

  return (
    <DonateSection>
      <ContentColumn>
        <Title>
          Be the Reason
          <br />
          Someone Smiles Today!
        </Title>
        <Description>
          Your generosity can change lives every donation brings hope, support,
          and a brighter future. Give today and make a difference!
        </Description>
        <DonateButton ref={buttonRef}>Donate Now</DonateButton>
      </ContentColumn>
      <ImageColumn>
        <StyledImage
          src="/Donate Section/donate.svg"
          alt="Donation Illustration"
          width={700}
          height={600}
          priority
        />
      </ImageColumn>
    </DonateSection>
  );
}
