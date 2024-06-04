import React from 'react';
import { companyName, navItems } from "../../config.ts"
import Hero from './Hero.tsx';
import Navbar from '../components/Navbar.tsx';
import About from './About.tsx';
import Services from './Services.tsx';
import Solutions from './Solutions.tsx';
import Footer from './Footer.tsx';
import Contact from './Contact.tsx';



const LandingPage: React.FC = () => {
  return (
    <>
        <Navbar links={navItems} businessName={companyName}>
            <Hero />
            <About />
            <Services />
            <Solutions />
            <Contact />
            <Footer />
        </Navbar>
    </>
  );
};

export default LandingPage;
