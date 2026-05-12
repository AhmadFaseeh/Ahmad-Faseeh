import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkJourney from './components/WorkJourney';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CustomCursor, Divider } from './components/Common';

function App() {
  return (
    <div className="relative bg-bg-primary min-h-screen">
      {/* Visual Overlays */}
      <div className="noise" />
      <div className="fixed inset-0 bg-dots opacity-[0.03] pointer-events-none" />
      <CustomCursor />

      {/* Main Content */}
      <Navbar />
      
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <WorkJourney />
        <Divider />
        <Services />
        <Divider />
        <Projects />
        <Divider />
        <Testimonials />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
