import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Clickspark from './components/ClickSpark';
import Install from './components/Install';
import Donate from './components/Donate';
import Reviews from './components/Reviews';
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Clickspark />
      <Install />
      <Donate />
      <Reviews />
      <Footer />
    </main>
  );
}