"use client";
import styled from "styled-components";
import Image from "next/image";
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
  border-top-left-radius: 4rem;
  border-top-right-radius: 4rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  max-width: 1400px;
  margin: 12rem auto 0 auto;
  position: relative;
  overflow: hidden;
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
    border-radius: 1.5rem 1.5rem 0 0;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 1.25rem 1.25rem 0 0;
    margin: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 1rem 1rem 0 0;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  margin-left: -0.7rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 1.5rem 0;
  }
`;

const StoreButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.2rem;
  background-color: #fff;
  color: #000;
  border-radius: 0.75rem;
  text-decoration: none;
  font-family: inherit;
  transition: all 0.3s ease;
  width: 240px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #111;
    transform: translateY(-2px);
  }

  img {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 768px) {
    width: 220px;
    justify-content: center;
  }
`;

const StoreText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;

  span:first-child {
    font-size: 0.75rem;
    opacity: 0.8;
  }

  span:last-child {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 2px;
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
  max-width: 600px;
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
  max-width: 600px;
  object-fit: contain;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));
  position: absolute;
  bottom: -110px;
  left: 50%;
  transform: translateX(-65%);

  @media (min-width: 786px) and (max-width: 1280px) {
    height: 320px;
    margin-left: 5rem;
  }

  @media (max-width: 768px) {
    max-width: none;
    width: auto;
    height: 350px;
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;


export default function Donate() {
  return (
    <DonateSection>
      <ContentColumn>
        <Title>
          Join the Fun - Download
          <br />
          Mybindle Now!
        </Title>
        <Description>
          Your Social Network, Your Way. Download MyBindle Now and Be a Part of
          a Community That's Always Evolving!
        </Description>
        <ButtonContainer>
          <StoreButton href="#">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              unoptimized
              width={18}
              height={18}
              style={{ width: "22px", height: "22px" }}
            />

            <StoreText>
              <span>Download on the</span>
              <span>App Store</span>
            </StoreText>
          </StoreButton>

          <StoreButton href="#">
            <Image
              src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-play-store-vector-png-image_12256666.png"
              alt="Google Play"
              width={36}
              height={36}
            />
            <StoreText>
              <span>GET IT ON</span>
              <span>Google Play</span>
            </StoreText>
          </StoreButton>
        </ButtonContainer>
      </ContentColumn>

      <ImageColumn>
        <StyledImage
          src="/Footer Section/mobileimg.svg"
          alt="Donation Illustration"
          width={700}
          height={600}
          priority
        />
      </ImageColumn>
    </DonateSection>
  );
}
