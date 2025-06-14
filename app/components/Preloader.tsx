"use client"
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const scaleIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const PreloaderContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #E74F45;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeOut} 0.5s ease-in-out forwards;
  animation-delay: 2s;
  opacity: ${props => props.$isVisible ? 1 : 0};
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  pointer-events: none;
`;

const LogoWrapper = styled.div`
  width: 200px;
  height: 200px;
  animation: ${scaleIn} 1s ease-out forwards;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
`;

const Preloader = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <PreloaderContainer $isVisible={isVisible}>
      <LogoWrapper>
        <Logo 
          src="/Hero Section/mybindle-logo.svg" 
          alt="MyBindle Logo"
          width={200}
          height={200}
        />
      </LogoWrapper>
    </PreloaderContainer>
  );
};

export default Preloader;
