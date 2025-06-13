"use client";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;
  min-height: clamp(300px, 50vh, 600px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(16px, 3vw, 40px);
  background: #f7f7f7;
  overflow: hidden;
  position: relative;
  margin-top: 18px;
  margin-bottom: clamp(20px, 4vw, 40px);

  @media (max-width: 900px) {
    margin-top: 16px;
    min-height: clamp(200px, 35vh, 350px);
    padding: clamp(12px, 2vw, 24px);
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    margin-top: 12px;
    min-height: clamp(180px, 30vh, 280px);
    padding: 12px;
    margin-bottom: 18px;
  }
`;


const ResponsiveImage = styled.img`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  transition: transform 0.3s ease;

  @media (max-width: 1200px) {
    max-width: 90vw;
  }

  @media (max-width: 768px) {
    max-width: 95vw;
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export default function Donate() {
  return (
    <ImageWrapper>
      <ImageContainer>
        <ResponsiveImage
          src="/Donate Section/donate.svg"
          alt="Donation Illustration"
          draggable={false}
          loading="eager"
        />
      </ImageContainer>
    </ImageWrapper>
  );
}
