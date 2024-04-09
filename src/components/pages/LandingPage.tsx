import React from 'react';
import Navbar from '../templates/Navbar';
import Hero from '../templates/Hero';
import About from '../templates/About';
import Services from '../templates/Services';
import Contact from '../pages/Contact';
import Footer from '../templates/Footer';

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Contact />
    <Footer />
    </>
  );
};

export default LandingPage;