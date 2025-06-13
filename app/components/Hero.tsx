"use client";

import styled from "styled-components";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroContainer = styled.div`
  background: #e74f45;
  min-height: 100vh; 
  width: 100%;
  display: flex;
  align-items: center;
  padding: clamp(1rem, 3vw, 2rem);
  position: relative;
  isolation: isolate;

  @media (max-width: 1024px) {
    padding: 2rem;
    min-height: auto;
    padding-top: 8rem;
    padding-bottom: 4rem;
  }

  @media (max-width: 480px) {
    padding-top: 8rem;
    padding-bottom: 2rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(2rem, 6vw, 6rem);
  padding-left: clamp(1rem, 3vw, 2rem);

  @media (max-width: 1024px) {
    gap: 3rem;
    padding: 0 1rem;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  color: white;
  max-width: 700px;
  padding-right: clamp(1rem, 3vw, 2rem);

  @media (max-width: 1200px) {
    max-width: 600px;
  }

  @media (max-width: 1024px) {
    padding-right: 0;
    padding: 0 2rem;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (max-width: 1200px) {
    font-size: clamp(2.25rem, 4vw, 3.5rem);
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    font-size: 2.25rem;
    margin-bottom: 2rem;
  }
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.5;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  max-width: 600px;
  letter-spacing: 0.01em;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 540px;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
  }
`;

const GetStartedButton = styled.button`
  background-color: white;
  color: #e74f45;
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  font-weight: 500;
  padding: clamp(0.875rem, 2vw, 1rem) clamp(2rem, 3vw, 2.5rem);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: -0.5rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  backdrop-filter: blur(5px);
  white-space: nowrap;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      #ff6b61,
      #e74f45,
      #ff6b61,
      #e74f45
    );
    background-size: 300% 100%;
    animation: none;
    transition: opacity 0.4s ease;
    opacity: 0;
    z-index: -2;
  }

  &:after {
    content: "";
    position: absolute;
    inset: 2px;
    background: white;
    border-radius: 10px;
    transition: all 0.4s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    letter-spacing: 1px;
    color: white;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
    box-shadow: 
      0 15px 30px rgba(231, 79, 69, 0.2),
      0 8px 12px rgba(231, 79, 69, 0.1),
      0 0 0 2px rgba(255, 255, 255, 0.1),
      inset 0 0 5px rgba(255, 107, 97, 0.4);

    &:before {
      opacity: 1;
      animation: gradientShift 3s linear infinite;
    }

    &:after {
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(1px) scale(0.98);
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.75rem;
    width: 100%;
    max-width: 280px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: clamp(400px, 50vh, 600px);
  margin-right: clamp(2rem, 5vw, 5rem);
  perspective: 1500px;
  z-index: 1;

  @media (max-width: 1200px) {
    margin-right: clamp(1rem, 3vw, 3rem);
  }

  @media (max-width: 1024px) {
    min-height: 500px;
    margin-right: 0;
    width: 100%;
    max-width: 600px;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    min-height: 400px;
  }

  @media (max-width: 480px) {
    min-height: 350px;
  }
`;

const EmojiIcon = styled.div<{ top: string; left: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background-color: white;
  width: clamp(20px, 2.5vw, 23px);
  height: clamp(20px, 2.5vw, 23px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(12px, 1.5vw, 14px);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 12px;
  }
`;

const PhoneImage = styled(Image)`
  width: clamp(300px, 40vw, 480px) !important;
  height: clamp(450px, 60vw, 710px) !important;
  object-fit: contain;
  position: relative;
  margin-top: clamp(30px, 4vw, 60px);
  margin-bottom: clamp(-120px, -15vw, -180px);

  @media (max-width: 1024px) {
    width: clamp(320px, 50vw, 420px) !important;
    height: clamp(480px, 75vw, 630px) !important;
    margin-top: 30px;
    margin-bottom: -120px;
  }

  @media (max-width: 768px) {
    width: clamp(280px, 80vw, 400px) !important;
    height: clamp(420px, 120vw, 600px) !important;
    margin-top: 20px;
    margin-bottom: -100px;
  }

  @media (max-width: 480px) {
    width: 280px !important;
    height: 420px !important;
    margin-top: 10px;
    margin-bottom: -80px;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 180px;
    height: 40px;
    top: 2rem;
  }
`;

const LogoImage = styled(Image)`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: auto !important;
  height: auto !important;
  z-index: 2;

  @media (max-width: 1024px) {
    top: 2.5rem;
  }

  @media (max-width: 480px) {
    top: 3rem;
  }
`;

// Add these new styled components for the particle effects
const ButtonParticle = styled.span`
  position: absolute;
  background: white;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10;
`;

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const phoneRef = useRef<HTMLImageElement>(null);
  const emoji1Ref = useRef<HTMLDivElement>(null);
  const emoji2Ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle 3D rotation effect for phone image
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageContainerRef.current || !phoneRef.current) return;

      const rect = imageContainerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate rotation based on mouse position
      const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 8;
      const rotateX = -((mouseY - centerY) / (rect.height / 2)) * 8;

      // Apply smooth transform
      gsap.to(phoneRef.current, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      if (!phoneRef.current) return;
      
      gsap.to(phoneRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      });
    };

    const container = imageContainerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ 
        defaults: { ease: "power3.out" },
        paused: true 
      });
      
      // Ensure all refs exist before animating
      if (!logoRef.current || !titleRef.current || !descriptionRef.current || 
          !buttonRef.current || !phoneRef.current || !containerRef.current) {
        return;
      }      // Initial setup - prepare all elements for animation except logo
      gsap.set([descriptionRef.current, buttonRef.current], {
        opacity: 0,
        y: 30
      });
      
      gsap.set(phoneRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -5
      });

      // Make sure logo is visible initially
      gsap.set(logoRef.current, {
        opacity: 1,
        y: 0
      });
      
      // First, setup the background gradient
      gsap.set(containerRef.current, {
        background: 'linear-gradient(120deg, #e74f45 0%, #e74f45 100%)'
      });
      
      tl.fromTo(containerRef.current,
        {
          background: 'linear-gradient(120deg, #e74f45 0%, #e74f45 100%)'
        },
        {
          background: 'linear-gradient(120deg, #e74f45 0%, #ff6b61 100%)',
          duration: 0.8,
          ease: "power1.inOut"
        });      // Logo animation with bounce - faster
      tl.from(logoRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)"
      });      // Title animation with awesome effects
      const spans = titleRef.current.getElementsByTagName('span');
      if (spans.length > 0) {
        tl.fromTo(spans, 
          {
            opacity: 0,
            scale: 0.5,
            y: 50,
            rotationX: -45,
            transformOrigin: "50% 50% -50"
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "elastic.out(1, 0.75)"
          }, "-=0.2");
      }

      // Description animation with reveal effect
      tl.to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out"
      }, "-=0.6");

      // Button animation with pop and glow
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

      // Phone animation with floating effect
      tl.to(phoneRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "-=1")
      .to(phoneRef.current, {
        y: "10px",
        rotation: 1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Emoji animations
      if (emoji1Ref.current && emoji2Ref.current) {
        tl.from([emoji1Ref.current, emoji2Ref.current], {
          opacity: 0,
          scale: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
        }, "-=0.7");      }

      // Play the timeline immediately
      tl.play();
    });

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      ctx.revert();
    };
  }, []);

  return (
    <HeroContainer ref={containerRef}>
      <LogoContainer ref={logoRef}>
        <Image
          src="/Hero Section/mybindle-logo.svg"
          alt="MyBindle Logo"
          width={200}
          height={48}
          priority
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </LogoContainer>
      <ContentWrapper>
        <TextContent>
          <Title ref={titleRef}>
            <span>Stay Connected</span>
            <br />
            <span>Stay Social</span>
            <br />
            <span>Stay You!</span>
          </Title>
          <Description ref={descriptionRef}>
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences. Whether you're looking to reconnect
            with old friends, build new relationships, or share what matters
            most to you – MyBindle is your home on the internet.
          </Description>
          <GetStartedButton ref={buttonRef}>Get Started</GetStartedButton>
        </TextContent>
        <ImageContainer ref={imageContainerRef}>        
          <PhoneImage
            ref={phoneRef}
            src="/Hero Section/mobile.png"
            alt="MyBindle Mobile App"
            width={480}
            height={710}
            quality={100}
            priority
          />
        </ImageContainer>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
